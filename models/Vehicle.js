const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  numberplate: {
    type: String,
    trim: true,
  },
  color: {
    type: String,
    trim: true,
  },
  datetimeArrival: {
    type: Date,
    trim: true,
    
  },
  make: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  doa: {
    type: Date,
    trim: true,
  },
  washer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Washer',
  },
  package: {
    type: String,
    trim: true,
  },
  packagePrice: {
    type: Number,
  }, 
 washerFee: {
  type: Number,
 }
});
module.exports = mongoose.model('Vehicle', vehicleSchema);