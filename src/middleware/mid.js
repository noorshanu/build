const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const getUserFromToken = (token, res) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded || !decoded._id) {
      return res.status(400).json({ msg: 'Invalid token, token not matching' });
    }

    return decoded._id;
  } catch (error) {
    // return { error: true, msg: 'Error decoding token:', error: error.message };
    return { msg: 'Error decoding token:', error: error.message };
  }
};

const tokenFunc = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).send('Please provide a token');
  }

  const userId = getUserFromToken(token);
  if (!userId) {
    return res.status(401).send('Invalid token');
  }

  req.userId = userId;
  next();
};

const authorization = async (req, res, next) => {
  try {
    const decodedToken = req.user;

    if (!decodedToken) {
      return res
        .status(401)
        .send({ status: false, msg: 'Decoded token not found' });
    }

    const clientId = req.params.userId;

    if (!clientId) {
      return res.status(401).send({ status: false, msg: 'userId is required' });
    }

    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      return res
        .status(400)
        .send({ status: false, msg: 'Please enter a valid clientId' });
    }

    const user = await User.findById(clientId);
    if (!user) {
      return res
        .status(404)
        .send({ status: false, msg: 'User does not exist with this userId' });
    }

    if (user._id.toString() !== decodedToken.toString()) {
      return res
        .status(403)
        .json({ status: false, msg: 'You are not authorized' });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

const authenticate = async (req, res, next) => {
  try {
    const authHeader =
      req.headers.authorization?.split(' ')[1] || req.cookies.accessToken;

    if (!authHeader) {
      return res.status(401).send({ status: false, msg: 'Invalid Token' });
    }
    const _token = authHeader.replace('Bearer ', '');

    try {
      const decodedToken = jwt.verify(_token, process.env.ACCESS_TOKEN_SECRET);

      if (!decodedToken) {
        return res
          .status(401)
          .send({ status: false, msg: 'Decoded token not matched' });
      }

      const user = await User.findById(decodedToken._id).select();
      if (!user) {
        return res
          .status(401)
          .send({ status: false, msg: 'Invalid access token' });
      }
      req.user = user._id;

      next();
    } catch (verifyError) {
      return res.status(401).send({ status: false, msg: 'Invalid token' });
    }
  } catch (error) {
    return res.status(500).send({ message: 'Server error', error });
  }
};

module.exports = {
  token: tokenFunc,
  authenticate,
  getUserFromToken,
  authorization,
};
