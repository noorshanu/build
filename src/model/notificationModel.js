const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true }, // Corrected 'require' to 'required'
    message: { type: String, required: true }, // Corrected 'require' to 'required'
    isRead: { type: Boolean, default: false }, // Changed 'IsRead' to 'isRead' for consistency
  },
  { timestamps: true },
);

module.exports = mongoose.model('Notification', NotificationSchema); // Fixed typo in the model name
