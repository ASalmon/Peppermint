const mongoose = require('mongoose');

const { Schema } = mongoose;

const transactionSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  departmentName: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  transactionDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
