const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  sales: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sales',
    },
  ],
});

module.exports = mongoose.model('Store', storeSchema);
