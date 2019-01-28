const mongoose = require('mongoose');

const { Schema } = mongoose;

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  storeId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Department', departmentSchema);
