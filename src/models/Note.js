const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

module.exports = model('Note', noteSchema);