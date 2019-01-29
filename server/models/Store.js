const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Store', storeSchema);
