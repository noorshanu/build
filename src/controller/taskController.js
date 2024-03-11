const mongoose = require('mongoose');
const Task = require('../model/taskModel');

const createtask = async (req, res) => {
  const {
    userId,
    title,
    projectAttributes,
    keywords,
    pricingTitle,
    description,
    deliveryDays,
    numberOfPagesOrScreens,
    price,
    serviceOptions,
    packageDescription,
    question,
    images,
    externalLink,
  } = req.body;

  // Validate required fields
  if (!price || !deliveryDays || !userId || !title || !description) {
    return res.status(400).send({
      status: false,
      msg: 'price, deliveryDays, userId, and title are all required',
    });
  }

  try {
    const data = await Task.create({
      userId,
      title,
      projectAttributes,
      keywords,
      pricingTitle,
      description,
      deliveryDays,
      numberOfPagesOrScreens,
      price,
      serviceOptions,
      packageDescription,
      question,
      images,
      externalLink,
    });

    res
      .status(201)
      .json({ status: true, msg: 'Task created successfully!', data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: 'Server error' });
  }
};

//= ===================get user details using taskId and taskmodel================//

const gettaskById = async (req, res) => {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res
      .status(400)
      .send({ status: false, msg: 'invalid taskId in params ..' });
  }
  try {
    const task = await Task.findById(taskId).populate(
      'userId',
      'username email FullName',
    );
    if (!task) {
      return res
        .status(404)
        .send({ status: false, msg: 'Task not found with this taskId' });
    }

    res.json({
      status: true,
      message: 'task fetched successfully',
      data: task,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: 'Server error' });
  }
};

const gettask = async (req, res) => {
  try {
    const tasks = await Task.find({}).populate(
      'userId',
      'username email FullName',
    );
    res.json({ status: true, msg: 'data fetch successfully', data: tasks });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: 'Server error' });
  }
};

const gettasksUserByuserId = async (req, res) => {
  const { userId } = req.params; // Destructure userId from req.params

  try {
    if (!userId || userId.trim() === '') {
      console.log('Invalid userId'); // Log if userId is invalid
      return res
        .status(400)
        .send({ status: false, msg: 'Please provide a valid userId' });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send({ status: false, msg: 'Invalid user ID' });
    }

    const task = await Task.find({ userId }).populate(
      'userId',
      'username email FullName',
    );

    if (!task) {
      return res
        .status(404)
        .send({ status: false, msg: 'No task found for the provided userId' });
    }

    res
      .staus(200)
      .json({ status: true, msg: 'Data fetched successfully', data: task });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: 'Server error' });
  }
};

module.exports = { createtask, gettaskById, gettasksUserByuserId, gettask };
