/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
// const { readdirSync } = require('fs');

const verify = require('../model/verifyUserModel');
const User = require('../model/userModel');
const { getUserFromToken } = require('../middleware/mid');
const { refreshTokenOptions } = require('../constants');
const {
  uploadOnCloudinary,
  deleteFromCloudinary,
} = require('../utils/cloudinary');

// const port = 4000;
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
const generateAccessAndRefereshTokens = async (userId, res) => {
  try {
    // Check if userId is provided
    if (!userId) {
      return res
        .status(400)
        .json({ status: false, msg: 'User ID is required' });
    }

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    // // Generate access token
    const accessToken = user.generateAccessToken();

    // // Generate refresh token
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // Log tokens for debugging
    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);

    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Error during token generation:', error);
    return res
      .status(500)
      .json({ status: false, msg: 'Internal server error' });
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

// const register = async (req, res) => {
//   try {
//     const { FirstName, email, password, wallet, LastName, referrer } = req.body;

//     // Check if all required fields are provided
//     if (!FirstName || !email || !password || !LastName) {
//       return res
//         .status(400)
//         .json({ message: 'Please provide all required fields' });
//     }

//     // Check if the email already exists
//     const existingEmail = await User.findOne({ email });
//     if (existingEmail) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     // Check if the email exists in the verify collection
//     const existingVerifyEmail = await verify.findOne({ email });
//     if (existingVerifyEmail) {
//       // Email exists in verifies collection, update the existing verification document

//       // Update the existing verification document with new values
//       existingVerifyEmail.FirstName = FirstName;
//       (existingVerifyEmail.LastName = LastName)(
//         (existingVerifyEmail.wallet = wallet),
//       );
//       existingVerifyEmail.referrer = referrer;

//       // Save the updated verify document to the database
//       await existingVerifyEmail.save();

//       // Construct verification URL
//       const verificationUrl = `http://${req.headers.host}/email-verify?token=${existingVerifyEmail.verificationToken}`;

//       // Send verification email
//       const emailData = {
//         from: 'noreply@deelance.com',
//         to: email,
//         subject: 'Verify your Email! - Deelance',
//         html: `
//           <!DOCTYPE html>
//           <html lang="en">
//           <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>Email Verification</title>
//           </head>
//           <body>
//               <p>Hello ${FirstName},</p>
//               <p>Thanks for signing up for Deelance.</p>
//               <p>Please click the link below to verify your account:</p>
//               <a href="${verificationUrl}">Verify your account</a>
//               <p>Cheers,<br/>The Deelance Team</p>
//           </body>
//           </html>
//         `,
//       };

//       // eslint-disable-next-line func-names
//       transporter.sendMail(emailData, function (err, info) {
//         if (err) {
//           console.error('Error sending verification email:', err);
//           return res
//             .status(500)
//             .json({ message: 'Failed to send verification email' });
//         }
//         console.log('Email sent:', info.response);
//         res.status(201).json({
//           message: 'Verification email sent successfully',
//           data: verificationUrl,
//         });
//       });
//     } else {
//       // Email does not exist in verifies collection, proceed with creating a new verification document

//       // Generate verification token
//       const verificationToken = crypto.randomBytes(20).toString('hex');

//       // Create new verify instance
//       const newVerify = new verify({
//         FirstName,
//         LastName,
//         email,
//         password, // No need to hash the password here
//         wallet,
//         verificationToken,
//         referrer,
//       });

//       // Save the verify document to the database
//       await newVerify.save();

//       // Construct verification URL
//       const verificationUrl = `http://${req.headers.host}/email-verify?token=${verificationToken}`;

//       // Send verification email
//       const emailData = {
//         from: 'noreply@deelance.com',
//         to: email,
//         subject: 'Verify your Email! - Deelance',
//         html: `
//           <!DOCTYPE html>
//           <html lang="en">
//           <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>Email Verification</title>
//           </head>
//           <body>
//               <p>Hello ${FirstName},</p>
//               <p>Thanks for signing up for Deelance.</p>
//               <p>Please click the link below to verify your account:</p>
//               <a href="${verificationUrl}">Verify your account</a>
//               <p>Cheers,<br/>The Deelance Team</p>
//           </body>
//           </html>
//         `,
//       };

//       transporter.sendMail(emailData, function (err, info) {
//         if (err) {
//           console.error('Error sending verification email:', err);
//           return res
//             .status(500)
//             .json({ message: 'Failed to send verification email' });
//         }
//         console.log('Email sent:', info.response);
//         res.status(201).json({
//           message: 'Verification email sent successfully',
//           data: verificationUrl,
//         });
//       });
//     }
//   } catch (error) {
//     console.error('Failed to register user:', error);
//     res.status(500).json({ message: 'Failed to register user' });
//   }
// };
const register = async (req, res) => {
  try {
    const {
      FirstName,
      email,
      password,
      wallet,
      LastName,
      referrer,
      external_profiles,
    } = req.body;

    // Check if all required fields are provided
    if (!FirstName || !email || !password || !LastName) {
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
      existingVerifyEmail.FirstName = FirstName;
      existingVerifyEmail.LastName = LastName;
      existingVerifyEmail.wallet = wallet;
      existingVerifyEmail.referrer = referrer;
      existingVerifyEmail.external_profiles = external_profiles;

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
              <p>Hello ${FirstName},</p>
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
        FirstName,
        LastName,
        email,
        password, // No need to hash the password here
        wallet,
        verificationToken,
        referrer,
        external_profiles,
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
              <p>Hello ${FirstName},</p>
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

    res.status(200).json({ msg: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error verifying email', error });
  }
};

// =========================login User ==============================//

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).send({ status: false, msg: ' email is required' });
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
    return res.status(200).json({ data: user, accessToken: accessToken });
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
const Profile = async (req, res) => {
  try {
    // const { userId } = req.userId ;
    const { user } = req;
    // console.log("this is user" ,user)

    //  const user = await User.findById(user);

    if (!user) {
      return res.status(404).send('User not found');
    }
    if (!req.body.FirstName || !req.body.LastName) {
      return res
        .status(400)
        .send({ status: false, msg: 'FirstName and LastName are missing' });
    }

    // Update user fields
    user.FirstName = req.body.FirstName;
    user.LastName = req.body.LastName;
    user.title = req.body.title;
    user.description = req.body.description;
    // user.skills = req.body.skills;
    user.education = req.body.education;
    user.otherDetails = req.body.otherDetails;
    user.country = req.body.country;
    user.external_profiles = req.body.external_profiles;

    if (req.body.skills) {
      if (typeof req.body.skills === 'string') {
        // If skills is a single string, wrap it in an array of objects
        user.skills = [{ label: req.body.skills }];
      } else if (Array.isArray(req.body.skills)) {
        // If skills is an array, ensure each element is an object
        user.skills = req.body.skills.map(skill =>
          typeof skill === 'string' ? { label: skill } : skill,
        );
      }
    }
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
    // const formattedExternalProfiles = user.external_profiles.map(profile => {
    //   return {
    //     type: profile.type,
    //     public_url: profile.public_url,
    //   };
    // });

    // Send success response with formatted external profiles
    res.status(200).json({
      status: true,
      message: 'Profile updated successfully',
      // external_profiles: formattedExternalProfiles,
    });
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

//= =============================avatar upload and update =================================//

const avatar = async (req, res) => {
  try {
    // Extract user ID from authenticated user
    const userId = req.user._id;

    // Check if a file is uploaded
    console.log(req.file);
    if (!req.file) {
      return res.status(400).send({ status: false, msg: 'No file uploaded' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const avatarUrl = req.file.path; // Access path directly
    if (!avatarUrl) {
      return res
        .status(400)
        .json({ status: false, msg: 'avatar file is required' });
    }

    const previousAvatarUrl = user.avatar;

    // If there is a previous avatar, delete it from Cloudinary
    if (previousAvatarUrl) {
      const deleteResult = await deleteFromCloudinary(previousAvatarUrl);
      if (!deleteResult) {
        return res.status(400).json({
          status: false,
          msg: 'Failed to delete previous avatar from Cloudinary',
        });
      }
    }

    // Upload new avatar to Cloudinary
    const uploadResult = await uploadOnCloudinary(avatarUrl);
    if (!uploadResult) {
      return res
        .status(400)
        .json({ status: false, msg: 'avatar file upload failed' });
    }

    // Update user's avatar field with Cloudinary URL
    user.avatar = uploadResult.url;
    await user.save(); // Save the updated user object

    res.status(200).json({ data: user.avatar });
  } catch (error) {
    res.status(500).send({ status: false, msg: 'Server error' });
  }
};

// =================================profile complete % ==============================//

const profilePercentage = async ({ user }, res) => {
  try {
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { completion_percent, missing_areas, profile_completion_hit_at } =
      calculateProfileCompletion(user);

    res.json({ completion_percent, missing_areas, profile_completion_hit_at });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
function calculateProfileCompletion(user) {
  const requiredFields = [
    'education',
    'experience',
    'title',
    'avatar',
    'email',
    'FirstName',
    'LastName',
    'country',
    'description',
    'skills',
    'external_profiles',
  ];

  const fieldPercentages = {
    education: 15,
    experience: 15,
    title: 5,
    avatar: 15,
    email: 10,
    FirstName: 5,
    LastName: 5,
    country: 5,
    description: 10,
    skills: 10,
    external_profiles: 5,
  };

  let completedFields = 0;
  let totalProgress = 0;
  const missingAreas = [];

  // Function to check if the field contains a default value
  function isDefaultValue(value) {
    return (
      (typeof value === 'string' && value.trim() === '') ||
      (Array.isArray(value) && value.length === 0)
    );
  }

  requiredFields.forEach(field => {
    const fieldValue = user[field];

    if (
      fieldValue !== undefined &&
      fieldValue !== null &&
      !isDefaultValue(fieldValue)
    ) {
      completedFields += fieldPercentages[field]; // Increment by field percentage
      totalProgress += fieldPercentages[field];
    } else {
      missingAreas.push({
        keywords: field,
        progress: -fieldPercentages[field],
        items_count: null,
      });
      totalProgress += fieldPercentages[field];
    }
  });

  const totalPercentage = Math.max((completedFields / totalProgress) * 100, 0); // Calculate total completion percentage

  return {
    completion_percent: Math.floor(totalPercentage), // Round down to the nearest integer
    missing_areas: missingAreas,
    profile_completion_hit_at: null,
  };
}

const updateExternalProfile = async (req, res) => {
  try {
    const { user } = req;
    const { external_profiles } = req.body;

    // Check if user exists
    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    // If external_profiles is an array, update all profiles
    if (Array.isArray(external_profiles)) {
      user.external_profiles = external_profiles;
    } else if (external_profiles && typeof external_profiles === 'object') {
      // If external_profiles is an object, update a single profile
      const { type, public_url } = external_profiles;
      const { profileId } = req.params;

      // Find the index of the profile to update
      const profileIndex = user.external_profiles.findIndex(
        profile => profile._id.toString() === profileId,
      );

      // Check if profile exists
      if (profileIndex === -1) {
        return res.status(404).send('External profile not found');
      }

      // Update the profile
      user.external_profiles[profileIndex].type = type;
      user.external_profiles[profileIndex].public_url = public_url;
    } else {
      return res
        .status(400)
        .json({ status: false, msg: 'Invalid request data' });
    }

    // Save the updated user document
    await user.save();

    res.status(200).json({
      status: true,
      message: 'External profiles updated successfully',
      user,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Server error');
  }
};

const deleteExternalProfile = async (req, res) => {
  try {
    const { user } = req;
    const { externalProfileIds } = req.body;

    // Check if user exists
    if (!user) {
      return res.status(404).json({ status: false, message: 'User not found' });
    }

    // Check if externalProfileIds array is provided
    if (
      !externalProfileIds ||
      !Array.isArray(externalProfileIds) ||
      externalProfileIds.length === 0
    ) {
      return res.status(400).json({
        status: false,
        message: 'Invalid or missing external profile IDs in the request body',
      });
    }

    // Check if all provided externalProfileIds exist in the user's external_profiles array
    const invalidIds = externalProfileIds.filter(
      id =>
        !user.external_profiles.some(profile => profile._id.toString() === id),
    );
    if (invalidIds.length > 0) {
      return res.status(404).json({
        status: false,
        message:
          "Some or all provided external profile IDs are not found in the user's profile",
      });
    }

    // Delete external profiles
    user.external_profiles = user.external_profiles.filter(
      profile => !externalProfileIds.includes(profile._id.toString()),
    );

    // Save the updated user document
    await user.save();

    res.status(200).json({
      status: true,
      message: 'External profiles deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting external profiles:', error);
    res.status(500).json({ status: false, message: 'Internal server error' });
  }
};

module.exports = { updateExternalProfile, deleteExternalProfile };

module.exports = {
  register,
  login,
  avatar,
  Profile,
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
  profilePercentage,
  deleteExternalProfile,
  updateExternalProfile,
};
