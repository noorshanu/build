const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const Task = require('../model/taskModel');
const User = require('../model/userModel');
const {
  uploadOnCloudinary,
  deleteTaskFromCloudinary,
  checkImageExistsInCloudinary,
} = require('../utils/cloudinary');
const deleteImagesInUploadsFolder = require('../utils/deleteuploadsimages');
//const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const createtask = async (req, res) => {
  try {
    const {
      userId,
      title,
      keywords,
      pricingTitle,
      description,
      deliveryDays,
      price,
      packageDescription,
      isPublish,
      faqs,
      category,
      subCategory,
      revision,
    } = req.body;

    if (!price || !title || !description) {
      await deleteImagesInUploadsFolder();
      return res.status(400).send({
        status: false,
        msg: 'Price, title, and description are required.',
      });
    }

    const parsedKeywords = keywords?.split(',') || [];

    const parsedFaqs = typeof faqs === 'string' ? JSON.parse(faqs) : faqs;

    if (!req.files || req.files.length === 0) {
      await deleteImagesInUploadsFolder();
      return res.status(400).send({ status: false, msg: 'No file uploaded' });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      await deleteImagesInUploadsFolder();
      return res.status(400).json({ status: false, msg: 'Invalid UserId' });
    }

    const user = await User.findById(userId);
    if (!user) {
      await deleteImagesInUploadsFolder();
      return res.status(404).send('User not found');
    }

    // ✅ Freelancer-only check
    if (user.currentMode !== 'FREELANCER' || !user.isFreelancerEnabled) {
      await deleteImagesInUploadsFolder();
      return res.status(403).json({
        status: false,
        msg: 'Only freelancers can create tasks',
      });
    }

    const userTaskCount = await Task.countDocuments({ userId });
    if (userTaskCount >= 4) {
      await deleteImagesInUploadsFolder();
      return res.status(400).json({
        status: false,
        msg: 'You can create only 4 tasks',
      });
    }

    const uploadedImages = await Promise.all(
      req.files.map(async file => {
        const uploadResult = await uploadOnCloudinary(file.path);
        if (!uploadResult?.url) {
          throw new Error('Image not uploaded to Cloudinary');
        }
        return { url: uploadResult.url };
      }),
    );

    const task = await Task.create({
      userId,
      title,
      keywords: parsedKeywords,
      pricingTitle,
      description,
      deliveryDays,
      price,
      packageDescription,
      images: uploadedImages,
      isPublish,
      faqs: parsedFaqs,
      category,
      subCategory,
      revision,
    });

    res.status(201).json({
      status: true,
      msg: 'Task created successfully!',
      data: task,
    });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).send({ status: false, msg: 'Server error' });
  } finally {
    await deleteImagesInUploadsFolder();
  }
};

const gettaskById = async (req, res) => {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res.status(400).json({ status: false, msg: 'Invalid taskId' });
  }

  try {
    const task = await Task.findById(taskId).populate(
      'userId',
      'UserName avatar title email revision wallet',
    );

    if (!task) {
      return res.status(404).json({ status: false, msg: 'Task not found' });
    }

    // Only allow:
    // - Task owner
    // - Client if the task is published
    if (
      task.userId._id.toString() !== req.user._id.toString() &&
      (req.user.role !== 'client' || !task.isPublish)
    ) {
      return res.status(403).json({
        status: false,
        msg: 'You are not authorized to view this task',
      });
    }

    res.status(200).json({
      status: true,
      message: 'Task fetched successfully',
      data: task,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, msg: 'Server error' });
  }
};

const gettask = async (req, res) => {
  try {
    const tasks = await Task.find({
      isPublish: true,
      blockchainCreationStatus: 'success',
    }).populate('userId', ' email  UserName avatar title');

    res.json({
      status: true,
      msg: 'data fetch successfully',
      data: tasks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: 'Server error' });
  }
};

const gettasksUserByuserId = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ status: false, msg: 'Invalid userId' });
  }

  if (userId !== req.user._id.toString()) {
    return res.status(403).json({
      status: false,
      msg: 'You are not authorized to view these tasks',
    });
  }

  try {
    const tasks = await Task.find({ userId }).populate(
      'userId',
      'UserName email avatar title',
    );

    res.status(200).json({
      status: true,
      msg: 'Tasks fetched successfully',
      data: tasks,
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ status: false, msg: 'Server error' });
  }
};

//========================update task byID===============================//

const updateTask = async (req, res) => {
  try {
    const taskid = req.params.taskId;

    // Check if taskId is provided
    if (!taskid) {
      return res.status(400).json({
        status: false,
        msg: 'Please provide a taskId for task update!',
      });
    }

    // Check if task exists
    const task = await Task.findById(taskid);
    if (!task) {
      return res
        .status(404)
        .json({ status: false, msg: `Task with ID ${taskid} not found` });
    }

    // Destructure request body
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
      isPublish,
      faqs,
      category,
      subCategory,
      revision,
    } = req.body;

    //===========if keyword in array form other wise covert Parse keywords string into an array============//

    const parsedKeywords = Array.isArray(keywords)
      ? keywords
      : keywords.split(',');

    // Parse FAQs if provided as a string
    let parsedFaqs = faqs;
    if (typeof faqs === 'string') {
      parsedFaqs = JSON.parse(faqs);
    }

    // Update task fields
    task.userId = userId || task.userId;
    task.title = title || task.title;
    task.projectAttributes = projectAttributes || task.projectAttributes;
    task.keywords = parsedKeywords || task.keywords; // Ensure parsedKeywords is used here
    task.pricingTitle = pricingTitle || task.pricingTitle;
    task.description = description || task.description;
    task.deliveryDays = deliveryDays || task.deliveryDays;
    task.numberOfPagesOrScreens =
      numberOfPagesOrScreens || task.numberOfPagesOrScreens;
    task.price = price || task.price;
    task.serviceOptions = serviceOptions || task.serviceOptions;
    task.packageDescription = packageDescription || task.packageDescription;
    task.question = question || task.question;
    //task.isPublish = isPublish || task.isPublish;
    task.isPublish = isPublish !== undefined ? isPublish : task.isPublish;
    task.faqs = parsedFaqs;
    task.category = category || task.category;
    task.subCategory = subCategory || task.subCategory;
    task.revision = revision || task.revision;

    // Save updated task
    const updatedTask = await task.save();

    res.status(200).json({
      status: true,
      msg: 'Task updated successfully!',
      data: updatedTask,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, msg: 'Server error' });
  }
};

//========================update images and add images =========================//

const updateTaskImages = async (req, res) => {
  try {
    const taskId = req.params.taskid;
    const newImages = req.files;

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      return res
        .status(400)
        .json({ status: false, msg: 'Please provide a correct TaskId' });
    }

    if (!newImages || newImages.length === 0) {
      return res
        .status(400)
        .json({ status: false, msg: 'Please provide images for upload' });
    }

    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ status: false, msg: 'Task not found' });
    }

    // Authorization: only owner or admin can update images
    if (req.user._id !== task.userId.toString() && req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ status: false, msg: 'Not authorized to update this task' });
    }

    // Upload new images to Cloudinary
    const uploadPromises = newImages.map(async image => {
      const uploadResult = await uploadOnCloudinary(image.path);
      if (!uploadResult || !uploadResult.url) {
        throw new Error('Image not uploaded to Cloudinary');
      }
      return { url: uploadResult.url };
    });

    const uploadedImages = await Promise.all(uploadPromises);

    task.images.push(...uploadedImages);
    await task.save();

    res.status(200).json({
      status: true,
      msg: 'Task images updated successfully!',
      data: task,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, msg: 'Server error' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deleteid = req.params.taskId;

    if (!mongoose.Types.ObjectId.isValid(deleteid)) {
      return res.status(400).send({
        status: false,
        msg: 'Please provide a valid taskId for deleting the task',
      });
    }

    const task = await Task.findById(deleteid);
    if (!task) {
      return res
        .status(404)
        .send({ status: false, msg: 'Task not found with this taskId' });
    }

    // Authorization: only owner or admin can delete
    if (req.user.id !== task.userId.toString() && req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ status: false, msg: 'Not authorized to delete this task' });
    }

    const images = task.images.map(image => image.url);

    if (images && images.length > 0) {
      const imageChecks = images.map(imageUrl =>
        checkImageExistsInCloudinary(imageUrl),
      );
      const imageCheckResults = await Promise.all(imageChecks);

      if (imageCheckResults.some(result => !result)) {
        await Task.deleteOne({ _id: deleteid });
        return res
          .status(200)
          .send({ status: true, msg: 'Task deleted successfully' });
      }

      const deleteImagePromises = images.map(imageUrl =>
        deleteTaskFromCloudinary(imageUrl),
      );
      const deleteImageResults = await Promise.all(deleteImagePromises);

      if (deleteImageResults.some(result => !result)) {
        return res.status(400).json({
          status: false,
          msg: 'Failed to delete images from Cloudinary',
        });
      }
    }

    await Task.deleteOne({ _id: deleteid });

    return res
      .status(200)
      .send({ status: true, msg: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ status: false, msg: 'Internal Server Error' });
  }
};
//======================Delete a specific image associated with a task============================//
const deleteTaskImage = async (req, res) => {
  try {
    const { taskId, imageId } = req.params;

    // Validate IDs
    if (
      !mongoose.Types.ObjectId.isValid(taskId) ||
      !mongoose.Types.ObjectId.isValid(imageId)
    ) {
      return res.status(400).json({
        status: false,
        msg: 'Please provide valid taskId and imageId',
      });
    }

    // Find task
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ status: false, msg: 'Task not found' });
    }

    // ✅ Authorization check (creator can delete only their image)
    if (task.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ status: false, msg: 'Not authorized to delete this image' });
    }

    // Find the image to delete
    const imageToDelete = task.images.find(
      image => image._id.toString() === imageId,
    );
    if (!imageToDelete) {
      return res
        .status(404)
        .json({ status: false, msg: 'Image not found in task' });
    }

    // Delete from Cloudinary
    const cloudinaryDeleted = await deleteTaskFromCloudinary(imageToDelete.url);
    if (!cloudinaryDeleted) {
      return res
        .status(500)
        .json({ status: false, msg: 'Failed to delete image from Cloudinary' });
    }

    // Remove image from task and save
    task.images.pull(imageId);
    await task.save();

    return res.status(200).json({
      status: true,
      msg: 'Task image deleted successfully!',
      data: task,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, msg: 'Server error' });
  }
};
//=====================search taSK aPi=============================//

const searchTask = async (req, res) => {
  try {
    const { title, category } = req.body;

    if (!title && !category) {
      return res
        .status(400)
        .json({ status: false, msg: 'Please provide task title or category' });
    }

    const query = [];
    if (title) {
      query.push({ title: { $regex: title, $options: 'i' } }); // Case-insensitive title search
    }
    if (category) {
      query.push({ category: { $regex: category, $options: 'i' } }); // Case-insensitive category search
    }

    const tasks = await Task.find({ $or: query });

    if (tasks.length === 0) {
      return res.status(404).json({
        status: false,
        msg: 'No tasks found matching the search criteria',
      });
    }

    return res
      .status(200)
      .json({ status: true, msg: 'Data fetched successfully', data: tasks });
  } catch (error) {
    return res.status(500).json({ status: false, msg: error.message });
  }
};

const setTaskInitTxStatus = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { task } = req;
    const { blockchainCreationStatus } = req.body;

    task.blockchainCreationStatus = blockchainCreationStatus;
    await task.save();

    res.status(200).json({
      status: true,
      msg: 'Task status updated successfully',
      data: task,
    });
  } catch (error) {
    return res.status(500).json({ status: false, msg: error.message });
  }
};
const getRecentGigs = async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const parsedLimit = parseInt(limit, 10); // parse first

    const gigs = await Task.find({ isPublish: true })
      .sort({ createdAt: -1 })
      .limit(parsedLimit); // then use here

    return res
      .status(200)
      .json({ status: true, msg: 'Recent gigs fetched', data: gigs });
  } catch (error) {
    return res.status(500).json({ status: false, msg: error.message });
  }
};

module.exports = {
  createtask,
  gettaskById,
  gettasksUserByuserId,
  gettask,
  updateTask,
  updateTaskImages,
  deleteTask,
  deleteTaskImage,
  searchTask,
  setTaskInitTxStatus,
  getRecentGigs,
};
