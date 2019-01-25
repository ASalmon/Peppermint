const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const StoreSchema = new Schema({
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

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;
