const { check, validationResult } = require('express-validator');
const Order = require('../model/orderSchema');
const Task = require('../model/taskModel');
const User = require('../model/userModel');

const createOrder = async (req, res) => {
  try {
    const { gigId, initialTransactionHash } = req.body;
    const client = req.user;

    // Ensure the user is a client
    if (client.accountType !== 'CLIENT') {
      return res.status(403).json({
        status: false,
        message: 'Only clients can initialize orders.',
      });
    }

    // Validate the gigId
    const task = await Task.findById(gigId);
    if (!task) {
      return res.status(404).json({
        status: false,
        message: 'Gig not found.',
      });
    }

    // Find the freelancer associated with the gig
    const freelancer = await User.findById(task.userId);
    if (!freelancer) {
      return res.status(404).json({
        status: false,
        message: 'Freelancer not found.',
      });
    }

    // Create a new order
    const newOrder = new Order({
      freelancerId: freelancer._id,
      clientId: client._id,
      gigId: task._id,
      initialTransactionHash,
      total: task.price,
      status: 'awaiting-freelancer-approval', // Initial status
    });

    // Save the order
    await newOrder.save();

    return res.status(201).json({
      status: true,
      message:
        'Order initialized successfully. Waiting for freelancer approval.',
      order: newOrder,
    });
  } catch (error) {
    console.error('Error initializing order:', error);
    return res.status(500).json({
      status: false,
      message: 'Failed to initialize order. Please try again later.',
    });
  }
};

const getFreelancerOrders = async (req, res) => {
  const { status } = req.params;

  try {
    // Ensure the user is a freelancer
    // if (req.user.accountType !== accountType) {
    //   return res.status(403).json({
    //     status: false,
    //     message: 'Only freelancers can view their orders.',
    //   });
    // }

    const query = { status };

    if (req.user.accountType === 'FREELANCER') {
      query.freelancerId = req.user._id;
    }

    if (req.user.accountType === 'CLIENT') {
      query.clientId = req.user._id;
    }

    // Find orders where the freelancer is the current user
    const orders = await Order.find(query)
      .populate('freelancerId', 'avatar title email UserName')
      .populate('clientId', 'avatar UserName email') // Populating client details
      .populate('gigId', 'title') // Populating gig details
      .sort({ createdAt: -1 }); // Sorting orders by creation date

    const aggregateQuery = {};

    if (req.user.accountType === 'FREELANCER') {
      aggregateQuery.freelancerId = req.user._id;
    }

    if (req.user.accountType === 'CLIENT') {
      aggregateQuery.clientId = req.user._id;
    }

    // Count orders for each status
    const statusCounts = await Order.aggregate([
      { $match: aggregateQuery },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    // Convert statusCounts array into an object with status as key and count as value
    const statusCountsMap = statusCounts.reduce((acc, cur) => {
      acc[cur._id] = cur.count;
      return acc;
    }, {});

    return res.status(200).json({
      status: true,
      message: 'Freelancer orders fetched successfully.',
      orders,
      counts: statusCountsMap,
    });
  } catch (error) {
    console.error('Error fetching freelancer orders:', error);
    return res.status(500).json({
      status: false,
      message: 'Failed to fetch freelancer orders. Please try again later.',
    });
  }
};

const approveOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Ensure the user is a freelancer
    if (req.user.accountType !== 'FREELANCER') {
      return res.status(403).json({
        status: false,
        message: 'Only freelancers can approve orders.',
      });
    }

    // Find the order by ID
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        status: false,
        message: 'Order not found.',
      });
    }

    // Ensure the current user is the freelancer associated with the order
    if (order.freelancerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        status: false,
        message: 'You are not authorized to approve this order.',
      });
    }

    // Ensure the order is in the correct status for approval
    if (order.status !== 'awaiting-freelancer-approval') {
      return res.status(400).json({
        status: false,
        message: 'Order cannot be approved in its current status.',
      });
    }

    // Calculate and set the deadline based on the current date plus deliveryDays
    const task = await Task.findById(order.gigId);
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + task.deliveryDays);
    order.deadline = deadline;

    // Update the order status to active
    order.status = 'active';
    await order.save();

    return res.status(200).json({
      status: true,
      message: 'Order approved successfully. Project started.',
      order,
    });
  } catch (error) {
    console.error('Error approving order:', error);
    return res.status(500).json({
      status: false,
      message: 'Failed to approve order. Please try again later.',
    });
  }
};

const declineOrderValidationRules = [
  check('reasonForDecline')
    .isLength({ min: 20, max: 160 })
    .withMessage(
      'Reason for decline must be between 20 and 160 characters long.',
    ),
];

const declineOrder = async (req, res) => {
  const { orderId } = req.params;

  // Validate the reason for decline
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Ensure the user is a freelancer
    if (req.user.accountType !== 'FREELANCER') {
      return res.status(403).json({
        status: false,
        message: 'Only freelancers can decline an order.',
      });
    }

    // Find the order by ID and ensure the freelancer is the one assigned
    const order = await Order.findOne({
      _id: orderId,
      freelancerId: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        status: false,
        message:
          'Order not found or you are not authorized to decline this order.',
      });
    }

    // Update the order status to 'freelancer-declined' and set the reason for decline
    order.status = 'freelancer-declined';
    order.reasonForDecline = req.body.reasonForDecline;
    await order.save();

    return res.status(200).json({
      status: true,
      message: 'Order declined successfully.',
      order,
    });
  } catch (error) {
    console.error('Error declining order:', error);
    return res.status(500).json({
      status: false,
      message: 'Failed to decline order. Please try again later.',
    });
  }
};

const withdrawOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    // Ensure the user is a client
    if (req.user.accountType !== 'CLIENT') {
      return res.status(403).json({
        status: false,
        message: 'Only clients can withdraw an order.',
      });
    }

    // Find the order by ID and ensure the client is the one assigned
    const order = await Order.findOne({
      _id: orderId,
      clientId: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        status: false,
        message:
          'Order not found or you are not authorized to withdraw this order.',
      });
    }

    // Update the order status to 'client-withdrawn'
    order.status = 'client-withdrawn';
    await order.save();

    return res.status(200).json({
      status: true,
      message: 'Order withdrawn successfully.',
      order,
    });
  } catch (error) {
    console.error('Error withdrawing order:', error);
    return res.status(500).json({
      status: false,
      message: 'Failed to withdraw order. Please try again later.',
    });
  }
};

module.exports = {
  createOrder,
  getFreelancerOrders,
  approveOrder,
  declineOrder,
  withdrawOrder,
  declineOrderValidationRules,
};
