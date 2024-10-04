const mongoose = require('mongoose');
const Dispute = require('../model/disputeModel');
const Order = require('../model/orderSchema');
// eslint-disable-next-line no-unused-vars
const User = require('../model/userModel');

// Function to create a new dispute
const createDispute = async (req, res) => {
  const { orderId, reason, description } = req.body;

  if (!mongoose.isValidObjectId(orderId)) {
    return res
      .status(404)
      .send({ status: false, msg: 'This is not a valid order ID' });
  }

  try {
    // Check if a dispute already exists for this order by the same user
    const existingDispute = await Dispute.findOne({
      orderId,
      initiatedBy: req.user._id,
    });
    if (existingDispute) {
      return res.status(400).json({
        status: false,
        message: 'A dispute has already been created for this order by you.',
      });
    }

    const order = await Order.findById(orderId).select('clientId freelancerId');

    if (!order) {
      return res.status(404).json({
        status: false,
        message: 'Order not found.',
      });
    }

    const { clientId, freelancerId } = order;

    if (
      req.user._id.toString() !== clientId.toString() &&
      req.user._id.toString() !== freelancerId.toString()
    ) {
      return res.status(403).json({
        status: false,
        message:
          'You are not authorized to initiate this dispute. Only the client or freelancer can initiate a dispute.',
      });
    }

    const newDispute = new Dispute({
      orderId,
      clientId,
      freelancerId,
      reason,
      description,
      initiatedBy: req.user._id,
      status: 'open',
      createdAt: Date.now(),
    });

    await newDispute.save();

    return res.status(201).json({
      status: true,
      message: 'Dispute created successfully.',
      dispute: newDispute,
    });
  } catch (error) {
    console.error('Error creating dispute:', error);
    return res
      .status(500)
      .json({ status: false, message: 'Failed to create dispute.' });
  }
};

const getDisputes = async (req, res) => {
  try {
    const { userId } = req.params;
    // Fetch disputes where userId is either the clientId or freelancerId
    const disputes = await Dispute.find({
      $or: [{ clientId: userId }, { freelancerId: userId }],
    })
      .populate('orderId', 'total status')
      .populate('freelancerId clientId initiatedBy', 'name email');

    return res.status(200).json({ status: true, disputes });
  } catch (error) {
    console.error('Error fetching disputes:', error);
    return res
      .status(500)
      .json({ status: false, message: 'Error fetching disputes', error });
  }
};

const updateDispute = async (req, res) => {
  try {
    const { disputeId } = req.params;
    const { status, resolution } = req.body;

    const dispute = await Dispute.findById(disputeId);
    if (!dispute) {
      return res
        .status(404)
        .json({ status: false, message: 'Dispute not found' });
    }

    // Ensure the status is valid
    const validStatuses = ['open', 'resolved', 'cancelled'];
    if (status && !validStatuses.includes(status)) {
      return res
        .status(400)
        .json({ status: false, message: 'Invalid dispute status' });
    }

    // Update dispute
    if (status) dispute.status = status;
    if (resolution) dispute.resolution = resolution;

    dispute.updatedAt = Date.now();
    await dispute.save();

    return res
      .status(200)
      .json({ status: true, message: 'Dispute updated successfully', dispute });
  } catch (error) {
    console.error('Error updating dispute:', error);
    return res
      .status(500)
      .json({ status: false, message: 'Error updating dispute', error });
  }
};

const resolveDispute = async (req, res) => {
  const { disputeId } = req.params;
  const { decision, resolutionDetails } = req.body;

  try {
    const dispute = await Dispute.findById(disputeId).populate('orderId');
    if (!dispute) {
      return res
        .status(404)
        .json({ status: false, message: 'Dispute not found.' });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({
        status: false,
        message: 'Only an admin can resolve the dispute.',
      });
    }

    dispute.resolution = {
      resolvedBy: req.user._id,
      decision,
      resolutionDetails,
      resolutionDate: Date.now(),
    };
    dispute.status = 'resolved';
    dispute.updatedAt = Date.now();

    await dispute.save();

    return res.status(200).json({
      status: true,
      message: 'Dispute resolved successfully.',
      dispute,
    });
  } catch (error) {
    console.error('Error resolving dispute:', error);
    return res
      .status(500)
      .json({ status: false, message: 'Failed to resolve dispute.' });
  }
};

const deleteDispute = async (req, res) => {
  try {
    const { disputeId } = req.params;

    const dispute = await Dispute.findByIdAndDelete(disputeId);
    if (!dispute) {
      return res
        .status(404)
        .json({ status: false, message: 'Dispute not found' });
    }

    return res
      .status(200)
      .json({ status: true, message: 'Dispute deleted successfully' });
  } catch (error) {
    console.error('Error deleting dispute:', error);
    return res
      .status(500)
      .json({ status: false, message: 'Error deleting dispute', error });
  }
};

// Export all functions
module.exports = {
  createDispute,
  getDisputes,
  updateDispute,
  resolveDispute,
  deleteDispute,
};
