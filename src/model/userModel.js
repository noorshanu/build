const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwtExpiresIn } = require('../constants');

const externalProfileSchema = new mongoose.Schema({
  type: String,
  public_url: String,
});

const experienceSchema = new mongoose.Schema({
  title: String,
  companyName: String,
  location: String,
  locationType: String,
  employementType: String,
  currentlyWorkingHere: Boolean,
  startDate: String,
  startYear: Number,
  endDate: String,
  endYear: Number,
});

const otherDetailsSchema = new mongoose.Schema({
  timeZone: {
    region: String,
    timeZone: String,
  },
  payment: String,
  language: String,
});

const userSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wallet: { type: String },

  avatar: { type: String },
  verified: { type: Boolean, default: false },
  verificationToken: { type: String },
  registrationDate: { type: Date, default: Date.now },
  isPrivate: { type: Boolean, default: false },
  bonuses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bonus' }],
  points: { type: Number, default: 0 },
  title: { type: String, default: 'Your Title' },
  description: { type: String, default: 'Set your description here!' },
  // skills: [{ type: String }],
  country: { type: String },
  token: { type: String },
  kind: { type: Number, default: 0 },
  referrer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  refreshToken: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  skills: [{ code: String, label: String }],
  education: [
    {
      school: String,
      degree: String,
      fieldOfStudy: String,
      startMonth: String,
      startYear: String,
      endMonth: String,
      endYear: String,
      description: String,
    },
  ],
  experience: [experienceSchema],
  otherDetails: otherDetailsSchema,
  external_profiles: [externalProfileSchema],
});

userSchema.add({
  selectSubscription: {
    type: String,
    enum: ['general', 'premium', 'pro'],
    default: 'general',
  },
  metaverseId: String,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.error('Error comparing passwords:', error);
    return false;
  }
};

userSchema.methods.generateAccessToken = function () {
  try {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        // expiresIn: 3600, // Expiry time in seconds (e.g., 1 hour)
        expiresIn: jwtExpiresIn.accessToken, // Expiry time in seconds (e.g., 1 hour)
      },
    );
  } catch (error) {
    console.error('Error during token generation:', error);
    throw new Error('Error generating access token');
  }
};

userSchema.methods.generateRefreshToken = function () {
  try {
    // const REFRESH_TOKEN_SECRET = "another-secret-key";

    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        // expiresIn: 604800, // Expiry time in seconds (e.g., 1 week)
        expiresIn: jwtExpiresIn.refreshToken, // Expiry time in seconds (e.g., 1 week)
      },
    );
  } catch (error) {
    console.error('Error during token generation:', error);
    throw new Error('Error generating refresh token');
  }
};

const User = mongoose.model('User', userSchema);
module.exports = User;
// module.exports = mongoose.model("User", userSchema);
