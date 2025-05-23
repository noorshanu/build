const Task = require('../model/taskModel');
const User = require('../model/userModel');

const getAllUsers = async (req, res) => {
  try {
    // Admin access check
    if (req.user.role !== 'ADMIN') {
      return res.status(403).json({ status: false, msg: 'Access denied' });
    }

    // Fetch all users excluding sensitive fields
    const allUsers = await User.find().select('-password -refreshToken');

    res.status(200).json({
      status: true,
      msg: 'All users fetched successfully',
      data: allUsers,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      status: false,
      msg: 'Server error while fetching users',
      error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    if (user.role === 'admin') {
      return res
        .status(403)
        .json({ status: false, msg: 'Cannot delete Admin' });
    }

    await Task.deleteMany({ userId: userId });
    await User.findByIdAndDelete(userId);

    res.json({ status: true, msg: 'user deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: false, msg: 'Server Error' });
  }
};

const getUserDetails = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ status: false, msg: 'User not found' });
    }

    const tasks = await Task.find({ userId: userId });

    const data = {
      user: user,
      tasks: tasks,
    };

    res.json({ status: true, msg: 'user fetched successfully', data: data });
  } catch (error) {
    console.log('error = ', error);
    res.status(500).json({ status: false, msg: 'Server Error' });
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
  getUserDetails,
};
