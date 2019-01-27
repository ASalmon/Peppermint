const mongoose = require('mongoose');

const { Schema } = mongoose;

const salesSchema = new Schema({
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

module.exports = mongoose.model('Sales', salesSchema);
