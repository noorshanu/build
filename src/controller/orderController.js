// const Offer = require('../model/offerModel');
// const Order = require('../model/orderSchema');

// const createOrder = async (req, res) => {
//   const { offerId } = req.params;
//   const { action } = req.body; // 'accept' or 'reject'

//   try {
//     const offer = await Offer.findById(offerId);
//     if (!offer) {
//       return res.status(404).json({ status: false, msg: 'Offer not found' });
//     }

//     if (offer.status !== 'pending') {
//       return res.status(400).json({
//         status: false,
//         msg: 'Offer has already been accepted or rejected',
//       });
//     }

//     if (action === 'accept') {
//       offer.status = 'accepted';
//       await offer.save();

//       const finalPrice = offer.offerPrice || offer.task.initialPrice;

//       const newOrder = new Order({
//         taskId: offer.task,
//         buyerId: offer.buyer,
//         // jobDescription: offer.jobDescription,
//         //paymentTerms: offer.paymentTerms,
//         deadline: offer.deadline,
//         finalPrice: finalPrice,
//       });

//       await newOrder.save();

//       await Offer.findByIdAndDelete(offerId);

//       return res.status(201).json({
//         status: true,
//         msg: 'Offer accepted and order created',
//         order: newOrder,
//       });
//     }
//     if (action === 'reject') {
//       await Offer.findByIdAndDelete(offerId);

//       return res
//         .status(200)
//         .json({ msg: 'Offer rejected and document deleted' });
//     }
//     return res
//       .status(400)
//       .json({ status: false, msg: 'Invalid action specified' });
//   } catch (error) {
//     console.error('Error processing offer action:', error);
//     res.status(500).json({
//       status: false,
//       msg: 'An error occurred while processing the offer action',
//     });
//   }
// };

// module.exports = { createOrder };

//=========================with email notfication =======================//
const nodemailer = require('nodemailer');

const Offer = require('../model/offerModel');
const Order = require('../model/orderSchema');
const User = require('../model/userModel');
const Task = require('../model/taskModel');

const createOrderFromOffer = async offer => {
  try {
    const finalPrice = offer.offerPrice || offer.task.price;

    const newOrder = new Order({
      taskId: offer.task,
      buyerId: offer.buyer,
      // jobDescription: { type: String, required: true },
      //paymentTerms: { type: String },
      deadline: offer.deadline,
      finalPrice: finalPrice,
    });

    // Save the new order
    await newOrder.save();

    return newOrder;
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Could not create order');
  }
};

const sendEmailNotification = async (fromEmail, toEmail, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.COMPANY_GMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email notification sent: ', info.messageId);
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
};

const createOrder = async (req, res) => {
  const { offerId } = req.params;
  const { action } = req.body;

  try {
    const offer = await Offer.findById(offerId);
    //console.log('Offer found:', offer);

    if (!offer) {
      return res.status(404).json({ status: false, msg: 'Offer not found' });
    }

    if (offer.status === 'accepted') {
      return res
        .status(400)
        .json({ status: false, msg: 'Offer has already been accepted' });
    }

    const task = await Task.findById(offer.task);
    // console.log('Task found:', task);

    if (!task) {
      return res.status(404).json({ status: false, msg: 'Task not found' });
    }

    const client = await User.findById(task.userId).select('email  UserName');
    //console.log('Client found:', client);

    if (!client) {
      return res.status(404).json({ status: false, msg: 'Client not found' });
    }

    const buyer = await User.findById(offer.buyer).select('email  UserName');
    //console.log('Buyer found:', buyer);

    if (!buyer) {
      return res.status(404).json({ status: false, msg: 'Buyer not found' });
    }

    if (action === 'accepted') {
      offer.status = 'accepted';
      const order = await createOrderFromOffer(offer);
      await offer.save();

      const message = `Dear ${buyer.FirstName},\n\nWe are pleased to inform you that your offer has been accepted by ${client.FirstName} ${client.LastName}. Congratulations on securing this task! Please check your account for further details.\n\nBest regards,\n${client.FirstName} ${client.LastName}`;
      await sendEmailNotification(
        client.email,
        buyer.email,
        'Offer Accepted',
        message,
      );

      return res.status(200).json({
        status: true,
        message: 'Order confirmed',
        order,
      });
    }

    if (action === 'rejected') {
      offer.status = 'rejected';

      const message = `Dear ${buyer.FirstName},\n\nWe regret to inform you that your offer has been rejected by ${client.FirstName} ${client.LastName}. Thank you for your interest and effort. We encourage you to check other available tasks that might interest you.\n\nBest regards,\nteam Deelance`;

      await sendEmailNotification(
        client.email,
        buyer.email,
        'Offer Rejected',
        message,
      );

      await offer.save();
      await Offer.findByIdAndDelete(offerId);

      return res.status(200).json({
        status: false,
        message: 'Offer rejected and document deleted',
      });
    }

    return res
      .status(400)
      .json({ status: false, msg: 'Invalid action specified' });
  } catch (error) {
    //console.error('Error confirming/rejecting order:', error);
    return res.status(500).json({
      status: false,
      msg: 'An error occurred while processing the action',
    });
  }
};

module.exports = { createOrder };
