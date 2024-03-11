/* eslint-disable new-cap */
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const verify = require('../model/verifyUserModel');
const User = require('../model/userModel');
const { getUserFromToken } = require('../middleware/mid');
const { refreshTokenOptions } = require('../constants');
// const sendEmail = require('../utils/sendEmail');

// Function to validate email format

// function validateEmail(email) {
//   const emailRegex = /^[a-z0-9_]{1,}@[a-z]{3,10}[.]{1}[a-z]{3}$/;
//   return emailRegex.test(email);
// }

// // Function to validate username format
// function validateUsername(username) {
//   const usernameRegex = /^[A-Za-z0-9]+$/;
//   return usernameRegex.test(username);
// }

// // Function to validate full name format
// function validateFullName(fullName) {
//   const fullNameRegex = /^[A-Za-z\s]+$/;
//   return fullNameRegex.test(fullName);
// }

const avatar = async (req, res) => {
  try {
    // Extract user ID from authenticated user
    const userId = req.user._id;

    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const avatarUrl = req.files?.avatar[0]?.path;
    await user.save({ avatar: avatarUrl });
    res.status(200).json({ avatar: avatarUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// const sanitizeUser = (user) => {
//     const sanitizedUser = { ...user.toObject() };
//     delete sanitizedUser.password;
//     return sanitizedUser;
// };

// async function sendEmail(to, name, verifyLink) {
//   const emailHtml = `
//   <!DOCTYPE html>
//   <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
//   <head>
//     <meta charset="utf-8">
//     <meta name="x-apple-disable-message-reformatting">
//     <meta http-equiv="x-ua-compatible" content="ie=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
//     <meta name="color-scheme" content="light dark">
//     <meta name="supported-color-schemes" content="light dark">
//     <title>Welcome to Deelance</title>
//     <style>
//       .hover-bg-primary-light:hover {
//         background-color: #55f3de !important;
//       }
//       .hover-text-decoration-underline:hover {
//         text-decoration: underline;
//       }
//       @media (max-width: 600px) {
//         .sm-w-full {
//           width: 100% !important;
//         }
//         .sm-py-8 {
//           padding-top: 32px !important;
//           padding-bottom: 32px !important;
//         }
//         .sm-px-6 {
//           padding-left: 24px !important;
//           padding-right: 24px !important;
//         }
//         .sm-leading-8 {
//           line-height: 32px !important;
//         }
//       }
//     </style>
//   </head>
//   <body style="word-break: break-word; -webkit-font-smoothing: antialiased; margin: 0; width: 100%; background-color: #f8fafc; padding: 0">
//     <div style="display: none">
//     </div>
//     <div role="article" aria-roledescription="email" aria-label="Confirm your email address" lang="en">
//       <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" cellpadding="0" cellspacing="0" role="presentation">
//         <tr>
//           <td align="center" style="background-color: #f8fafc">
//             <table class="sm-w-full" style="width: 600px" cellpadding="0" cellspacing="0" role="presentation">
//               <tr>
//                 <td class="sm-py-8 sm-px-6" style="padding: 18px; background: #0A0A0B;">
//                   <h1 style="border: 0; color:#ffffff; max-width: 55%; vertical-align: middle">Deelance</h1>
//                 </td>
//               </tr>
//               <tr>
//                 <td align="center" class="sm-px-6">
//                   <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
//                     <tr>
//                       <td class="sm-px-6" style="border-radius: 4px; background-color: #fff; padding: 16px 28px 16px 28px; text-align: left; font-size: 14px; line-height: 24px; color: #334155; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
//                         <p>Hello!</p>
//                         <p>Thanks for signing up for Deelance.</p>
//                         <p>Please click the link below to verify your account:</p>
//                         <div style="line-height: 100%; margin-bottom: 20px; text-align: center;">
//                         <a href="${verifyLink}" style="background-color: #864DD2; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Verify email address</a>
//                         </div>
//                         <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
//                           <tr>
//                             <td>
//                               <div>
//                                 <p style="margin-bottom:0;">Cheers,</p>
//                                 <p style="margin-top:0;">The Deelance Team</p>
//                               </div>
//                             </td>
//                           </tr>
//                         </table>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td style="height: 48px"></td>
//                     </tr>
//                   </table>
//                 </td>
//               </tr>
//             </table>
//           </td>
//         </tr>
//       </table>
//     </div>
//   </body>
//   </html>
//   `;

//   const mailOptions = {
//     from: "noreply@deelance.com",
//     to: to,
//     subject: "Verify your Email! - Deelance",
//     html: emailHtml,
//   };

//   try {
//     const result = await transporter.sendMail(mailOptions);
//     console.log("Email inviata con successo:", result);
//   } catch (error) {
//     console.error("Errore nell'invio dell'email:", error);
//   }
// }

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 154500,
// });

// app.use(limiter);

const updateUserProfile = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.isPrivate) {
      const token = req.headers.authorization?.split(' ')[1];
      const userIdFromToken = getUserFromToken(token);

      if (!userIdFromToken || userIdFromToken !== user._id.toString()) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// const isProfileComplete = (user) => {
//   const requiredFields = ['username', 'email', 'FullName', 'title', 'description', 'country', 'skills'];

//   return requiredFields.every(field => {
//     const fieldValue = user[field];
//     return fieldValue && (typeof fieldValue === 'string' ? fieldValue.trim() !== '' : true);
//   });
// };

// 54;
// const port = 4000;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'noreply@deelance.com',
    pass: 'exstgantrkhpvbmz',
  },
});

//= ===========generateAccessAndRefereshTokens============//
const generateAccessAndRefereshTokens = async userId => {
  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      // eslint-disable-next-line no-undef
      throw new ApiError(404, 'User not found');
    }

    // Generate access token
    const accessToken = user.generateAccessToken();

    // Generate refresh token
    const refreshToken = user.generateRefreshToken();

    // Save refresh token to user document
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // Log tokens for debugging
    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);

    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Error during token generation:', error);
    // eslint-disable-next-line no-undef
    throw new ApiError(
      500,
      'Something went wrong while generating refresh and access token',
    );
  }
};

//= ========================refreshtoken======================//
const RefreshToken = async (req, res) => {
  try {
    const incomingRefreshToken =
      req.cookies.refreshToken ||
      req.body.refreshToken ||
      req.headers['refresh-token'];

    if (!incomingRefreshToken) {
      return res
        .status(401)
        .json({ status: false, msg: 'refreshToken is mandatory' });
    }

    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    if (!decodedToken) {
      return res
        .status(401)
        .json({ status: false, msg: 'Invalid RefreshToken' });
    }

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      return res
        .status(401)
        .json({ status: false, msg: 'Invalid refresh token' });
    }

    if (!user.refreshToken || incomingRefreshToken !== user.refreshToken) {
      return res
        .status(400)
        .json({ status: false, msg: 'Refresh token is expired or used' });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id,
    );

    // Update refresh token in the database
    user.refreshToken = refreshToken;
    await user.save();

    // Set refresh token in response headers
    res.set('refreshToken', refreshToken);
    res.cookie('refreshToken', refreshToken, refreshTokenOptions);

    return res.status(200).json({
      status: true,
      accessToken,
      refreshToken,
      msg: 'Access token refreshed',
    });
  } catch (error) {
    console.error('Error during token refresh:', error);
    return res
      .status(401)
      .json({ status: false, msg: error?.message || 'Invalid refresh token' });
  }
};

//= ==========================signup user====================================//

const register = async (req, res) => {
  try {
    const { username, email, password, wallet, FullName, referrer } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password || !FullName) {
      return res
        .status(400)
        .json({ message: 'Please provide all required fields' });
    }

    // Check if the email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Check if the email exists in the verify collection
    const existingVerifyEmail = await verify.findOne({ email });
    if (existingVerifyEmail) {
      // Email exists in verifies collection, update the existing verification document

      // Update the existing verification document with new values
      existingVerifyEmail.username = username;
      existingVerifyEmail.wallet = wallet;
      existingVerifyEmail.FullName = FullName;
      existingVerifyEmail.referrer = referrer;

      // Save the updated verify document to the database
      await existingVerifyEmail.save();

      // Construct verification URL
      const verificationUrl = `http://${req.headers.host}/email-verify?token=${existingVerifyEmail.verificationToken}`;

      // Send verification email
      const emailData = {
        from: 'noreply@deelance.com',
        to: email,
        subject: 'Verify your Email! - Deelance',
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Email Verification</title>
          </head>
          <body>
              <p>Hello ${FullName},</p>
              <p>Thanks for signing up for Deelance.</p>
              <p>Please click the link below to verify your account:</p>
              <a href="${verificationUrl}">Verify your account</a>
              <p>Cheers,<br/>The Deelance Team</p>
          </body>
          </html>
        `,
      };

      // eslint-disable-next-line func-names
      transporter.sendMail(emailData, function (err, info) {
        if (err) {
          console.error('Error sending verification email:', err);
          return res
            .status(500)
            .json({ message: 'Failed to send verification email' });
        }
        console.log('Email sent:', info.response);
        res.status(201).json({
          message: 'Verification email sent successfully',
          data: verificationUrl,
        });
      });
    } else {
      // Email does not exist in verifies collection, proceed with creating a new verification document

      // Generate verification token
      const verificationToken = crypto.randomBytes(20).toString('hex');

      // Create new verify instance
      const newVerify = new verify({
        username,
        email,
        password, // No need to hash the password here
        wallet,
        FullName,
        verificationToken,
        referrer,
      });

      // Save the verify document to the database
      await newVerify.save();

      // Construct verification URL
      const verificationUrl = `http://${req.headers.host}/email-verify?token=${verificationToken}`;

      // Send verification email
      const emailData = {
        from: 'noreply@deelance.com',
        to: email,
        subject: 'Verify your Email! - Deelance',
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Email Verification</title>
          </head>
          <body>
              <p>Hello ${FullName},</p>
              <p>Thanks for signing up for Deelance.</p>
              <p>Please click the link below to verify your account:</p>
              <a href="${verificationUrl}">Verify your account</a>
              <p>Cheers,<br/>The Deelance Team</p>
          </body>
          </html>
        `,
      };

      transporter.sendMail(emailData, function (err, info) {
        if (err) {
          console.error('Error sending verification email:', err);
          return res
            .status(500)
            .json({ message: 'Failed to send verification email' });
        }
        console.log('Email sent:', info.response);
        res.status(201).json({
          message: 'Verification email sent successfully',
          data: verificationUrl,
        });
      });
    }
  } catch (error) {
    console.error('Failed to register user:', error);
    res.status(500).json({ message: 'Failed to register user' });
  }
};

const emailverify = async (req, res) => {
  const { token } = req.query;
  try {
    const verifyDocument = await verify.findOne({ verificationToken: token });
    if (!verifyDocument) {
      return res.status(404).send('Invalid verification token');
    }

    // Create a new user from the verify document
    const newUser = new User({
      ...verifyDocument.toObject(), // Copy all fields from verifyDocument
      verified: true, // Mark the user as verified
      verificationToken: undefined, // Remove the verification token
    });

    // Save the new user to the database
    await newUser.save();

    // Delete the verify document
    await verify.deleteOne({ _id: verifyDocument._id });

    res.status(200).send('Email verified successfully');
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).send('Error verifying email');
  }
};

// =========================login User ==============================//

const login = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!(username || email)) {
      return res
        .status(400)
        .send({ status: false, msg: 'Username or email is required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ status: false, msg: 'User does not exist' });
    }

    // Check if the password is correct
    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).send({ status: false, msg: 'Incorrect password' });
    }

    // If the password is correct, generate new access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id,
    );

    // Update user's refresh token in the database
    try {
      user.refreshToken = refreshToken;
      await user.save();
    } catch (updateError) {
      return res
        .status(500)
        .send({ status: false, msg: 'Failed to update refresh token' });
    }

    // Retrieve the logged-in user without sending the password and refresh token
    // const loggedInUser = await User.findById(user._id).select('-password');

    // Set cookies with access token and refresh token
    // res.cookie('accessToken', accessToken, { httpOnly: true, secure: true });
    // res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });
    res.cookie('refreshToken', refreshToken, refreshTokenOptions);

    // Return the user data and tokens
    return res.status(200).json({
      accessToken: accessToken,
    });
  } catch (error) {
    return res.status(500).send({ status: false, msg: 'Failed to login' });
  }
};
//= ====================log out ==================================//

const logoutUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.refreshToken = undefined;
      await user.save();
    }

    // Clear cookies
    res.clearCookie('accessToken', { httpOnly: true, secure: true });
    res.clearCookie('refreshToken', { httpOnly: true, secure: true });

    // Send response
    return res.status(200).json({
      success: true,
      message: 'User logged out successfully',
      data: {},
    });
  } catch (error) {
    console.error('Error logging out user:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while logging out user',
      error: error.message,
    });
  }
};

//= ============================forget password=================================//

async function sendPasswordResetEmail(to, resetLink) {
  const emailHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>Reset Password - Deelance</title>
    <style>
      .hover-bg-primary-light:hover {
        background-color: #55f3de !important;
      }
      .hover-text-decoration-underline:hover {
        text-decoration: underline;
      }
      @media (max-width: 600px) {
        .sm-w-full {
          width: 100% !important;
        }
        .sm-py-8 {
          padding-top: 32px !important;
          padding-bottom: 32px !important;
        }
        .sm-px-6 {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
        .sm-leading-8 {
          line-height: 32px !important;
        }
      }
    </style>
  </head>
  <body style="word-break: break-word; -webkit-font-smoothing: antialiased; margin: 0; width: 100%; background-color: #f8fafc; padding: 0">
    <div role="article" aria-roledescription="email" lang="en">
      <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center" style="background-color: #f8fafc">
            <table class="sm-w-full" style="width: 600px" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td class="sm-py-8 sm-px-6" style="padding: 18px; background: #0A0A0B;">
                  <h1 style="border: 0; color: #ffffff; max-width: 55%; vertical-align: middle">Deelance</h1>
                </td>
              </tr>
              <tr>
                <td align="center" class="sm-px-6">
                  <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td class="sm-px-6" style="border-radius: 4px; background-color: #fff; padding: 16px 28px 16px 28px; text-align: left; font-size: 14px; line-height: 24px; color: #334155; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                        <p>Hello,</p>
                        <p>To reset your password, please click the button below:</p>
                        <div style="line-height: 100%; margin-bottom: 20px; text-align: center;">
                          <a href="${resetLink}" class="hover-bg-primary-light" style="text-decoration: none; display: inline-block; border-radius: 4px; background-color: #864DD2; padding-top: 14px; padding-bottom: 14px; padding-left: 16px; padding-right: 16px; text-align: center; font-size: 14px; font-weight: 600; color: #fff">Reset Password &rarr;</a>
                        </div>
                        <p>Cheers,</p>
                        <p>The Deelance Team</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="height: 48px"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
  </html>`;

  const mailOptions = {
    from: 'noreply@deelance.com',
    to,
    subject: 'Reset Password - Deelance',
    html: emailHtml,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email inviata con successo:', result);
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error);
  }
}
const forgotpassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const resetUrl = `http://${req.headers.host}/reset-password/${token}`;
    await sendPasswordResetEmail(user.email, resetUrl);
    // Send email with resetUrl...

    res.status(200).send({
      msg: 'Password reset link sent to your email address. Please reset your password!',
      data: resetUrl,
    });
  } catch (error) {
    console.error('Failed to initiate password reset:', error);
    res.status(500).send({ msg: 'Failed to initiate password reset' });
  }
};
const resetPasswordtoken = async (req, res) => {
  try {
    const { password } = req.body;
    const { token } = req.params;

    if (!password) {
      return res.status(400).send({ msg: 'Please enter a new password' });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .send({ msg: 'Password must be at least 8 characters long' });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send('Invalid or expired token');
    }

    const isSamePassword = await user.isPasswordCorrect(password); // Compare passwords
    if (isSamePassword) {
      return res
        .status(400)
        .send('New password cannot be the same as the old password');
    }

    // If the new password is different, update the password
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    user.refreshToken = undefined;

    await user.save();

    res
      .status(200)
      .send({ status: true, msg: 'Password changed successfully!' });
  } catch (error) {
    console.error('Failed to reset password:', error);
    res.status(500).send({ msg: 'Failed to reset password' });
  }
};

//= =========================get user===================================//
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user).select(
      '-password -refreshToken',
    );
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json({ status: true, msg: 'user fetch successfully', data: user });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

//= =========================cretae profile==================================//
const profile = async (req, res) => {
  try {
    // const { userId } = req.userId ;
    const { user } = req;
    //  const user = await User.findById(user);

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update user fields
    user.username = req.body.username;
    user.title = req.body.title;
    user.description = req.body.description;
    user.skills = req.body.skills;
    user.education = req.body.education;
    user.otherDetails = req.body.otherDetails;
    user.country = req.body.country;

    // Check if experience array exists
    if (req.body.experience && req.body.experience.length > 0) {
      // Update experience fields
      req.body.experience.forEach((exp, index) => {
        // Check if user.experience[index] exists, otherwise create it
        if (!user.experience[index]) {
          user.experience[index] = {};
        }

        user.experience[index].title = exp.title;
        user.experience[index].companyName = exp.companyName;
        user.experience[index].location = exp.location;
        user.experience[index].locationType = exp.locationType;
        user.experience[index].employementType = exp.employementType;
        user.experience[index].currentlyWorkingHere = exp.currentlyWorkingHere;
        user.experience[index].startDate = exp.startDate;
        user.experience[index].startYear = exp.startYear;

        // Conditionally update endDate and endYear based on currentlyWorkingHere
        if (!exp.currentlyWorkingHere) {
          // Check if endYear and endDate are provided
          if (exp.endYear && exp.endDate) {
            user.experience[index].endDate = exp.endDate;
            user.experience[index].endYear = exp.endYear;
          } else {
            // If not provided, handle the error
            return res.status(400).json({
              message: 'End date or end year is required for past experiences',
            });
          }
        } else {
          // If currentlyWorkingHere is true, remove endDate and endYear
          user.experience[index].endDate = undefined;
          user.experience[index].endYear = undefined;
        }
      });
    }

    await user.save();

    res
      .status(200)
      .json({ status: true, message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Server error');
  }
};

//= ========================update kind =====================================//

const updatekind = async (req, res) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }
    user.kind = req.body.kind; // Assuming kind is passed in req.body
    await user.save();

    res.status(200).send({ status: true, msg: 'Kind updated successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Server error');
  }
};

//= =======================user visiblity isprivate update api ================//

const userVisibility = async (req, res) => {
  // const { userId } = req.params;
  const { isPrivate } = req.body;

  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    user.isPrivate = isPrivate;
    await user.save();

    res
      .status(200)
      .send({ status: true, msg: 'Profile visibility updated successfully' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

//= ======================= edit profile user ==================================//

const editprofile = async (req, res) => {
  // const { userId } = req.params;

  const data = req.body;
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    // Update user fields individually
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in data) {
      user[key] = data[key];
    }

    // Save the updated user
    await user.save();

    res
      .status(200)
      .json({ status: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Server error');
  }
};

//= ===================get profile with all data with other model data using userId and matching userId in all model =============//
const getProfileUsinId = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(userId) } },
      {
        $lookup: {
          from: 'bonuses',
          localField: '_id',
          foreignField: 'userId',
          as: 'bonusesData',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'referrer',
          foreignField: '_id',
          as: 'referrerData',
        },
      },
      {
        $lookup: {
          from: 'tasks',
          localField: '_id',
          foreignField: 'userId',
          as: 'tasksData',
        },
      },
      // Add more lookup stages for other related collections if needed
    ]);

    const userProfile = {
      username: user.username,
      email: user.email,
      FullName: user.FullName,
      isPrivate: user.isPrivate,
      bonuses: userData[0].bonusesData,
      points: user.points,
      title: user.title,
      description: user.description,
      skills: user.skills,
      country: user.country,
      education: user.education,
      experience: user.experience,
      otherDetails: user.otherDetails,
      kind: user.kind,
      tasks: userData[0].tasksData,
      referrer: userData[0].referrerData,
    };

    res.json({
      status: true,
      msg: 'data fetch successfully',
      user: userProfile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

//= ==================================update profile using Id============================//
const updateprofileUsingId = async (req, res) => {
  // const { userId } = req.params;
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    Object.assign(user, req.body);
    await user.save();

    res
      .status(200)
      .json({ status: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Server error');
  }
};

//= ==================update skills =============================//
const UpdateUserIdskills = async (req, res) => {
  // const { userId } = req.params;
  const { skills } = req.body;

  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    // Check if skills is an array of strings or an array of objects
    if (Array.isArray(skills) && typeof skills[0] === 'string') {
      // Convert the array of strings to an array of objects
      user.skills = skills.map(skill => ({ code: skill, label: skill }));
    } else {
      // Otherwise, assume skills is already in the correct format
      user.skills = skills;
    }

    await user.save();

    // Send a JSON response with the updated skills
    res.status(200).json({
      status: true,
      msg: 'data update successgully',
      skills: user.skills,
    });
  } catch (error) {
    console.log('Server error:', error);
    // Send a JSON response with the error message
    res.status(500).json({ error: 'Server error' });
  }
};

//= =================update profile title or decription========================//

const UpdateTiTleDescription = async (req, res) => {
  // const { userId } = req.params;
  const { title, description } = req.body;
  try {
    // Assuming user object is available in the request
    const { user } = req;

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    // Update user properties
    user.title = title;
    user.description = description;
    await user.save();

    res.json({ status: true, msg: `Data updated successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

//= =======================updtae country===========================//

const userIncountry = async (req, res) => {
  // const { userId } = req.params;
  const { country } = req.body;

  try {
    const { user } = req;
    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    user.country = country;
    await user.save();
    res
      .status(200)
      .send({ status: true, msg: 'Profile country updated successfully' });
  } catch (error) {
    console.log('Server error:', error);
    res.status(500).send('Server error');
  }
};

module.exports = {
  register,
  login,
  avatar,
  profile,
  forgotpassword,
  resetPasswordtoken,
  updateUserProfile,
  userVisibility,
  userIncountry,
  UpdateUserIdskills,
  getUser,
  UpdateTiTleDescription,
  updatekind,
  getProfileUsinId,
  updateprofileUsingId,
  editprofile,
  emailverify,
  RefreshToken,
  logoutUser,
};
