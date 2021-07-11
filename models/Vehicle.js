const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  numberplate: {
    type: String,
    trim: true,
  },
  inputColor: {
    type: String,
    trim: true,
  },
  datetimeArrival: {
    type: Date,
    trim: true,
    
  },
  inputMake: {
    type: String,
    trim: true,
  },
  inputType: {
    type: String,
    trim: true,
  },
  washers: {
    type: String,
    trim: true,
  },
  washers: {
    type: String,
    trim: true,
  },
  washers: {
    type: String,
    trim: true,
  },
  Packages: {
    type: String,
    trim: true,
  },
  Payment: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model('Vehicle', vehicleSchema);