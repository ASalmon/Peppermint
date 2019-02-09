const mongoose = require('mongoose');

const { Schema } = mongoose;

const GoalsSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Goals', GoalsSchema);
