const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: { type: String, required: true, trim: true },
    keywords: [{ type: String }],
    pricingTitle: { type: String, default: 'Standard' },
    description: { type: String, required: true },
    deliveryDays: { type: Number, default: 1 },
    price: { type: Number, required: true },
    packageDescription: { type: String, default: '' },
    images: [
      {
        url: { type: String, required: true },
        alt: { type: String },
        type: { type: String },
      },
    ],
    isPublish: { type: Boolean, default: false },
    faqs: [{ question: String, answer: String }],
    category: { type: String },
    subCategory: { type: String },
    revisionCount: { type: Number, default: 1 },
    blockchainCreationStatus: {
      type: String,
      enum: ['init', 'success', 'failed'],
      default: 'init',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Task', taskSchema);
