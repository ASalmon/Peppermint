const mongoose = require('mongoose');

const { Schema } = mongoose;

const saleSchema = new Schema({
  name: {
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
  departmentId: {
    type: String,
    required: true,
  },
  transactionDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Sale', saleSchema);
