const mongoose = require('mongoose');

const washerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  dateofbirth: {
    type: Date,
    trim: true,
  },
  nationalid: {
    type: String,
    trim: true,
  },
  residence: {
    type: String,
    trim: true,
  },
  employeeid: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model('Washer', washerSchema);