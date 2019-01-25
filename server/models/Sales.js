const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const SalesSchema = new Schema({
  itemId: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  storeLocation: {
    type: String,
  },
});

const Sales = mongoose.model('Sales', SalesSchema);

module.exports = Sales;
