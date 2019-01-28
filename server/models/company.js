const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  stores: {
    type: String,
  },
});

module.exports = mongoose.model('Company', companySchema);
