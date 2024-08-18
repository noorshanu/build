const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // jobDescription: { type: String, required: true },
  //paymentTerms: { type: String }, // Example: "50% upfront, 50% upon completion"
  deadline: { type: Date, required: true },
  finalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
