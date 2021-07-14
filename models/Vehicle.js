const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  numberplate: {
    type: String,
    trim: true,
  },
  Color: {
    type: String,
    trim: true,
  },
  datetimeArrival: {
    type: Date,
    trim: true,
    
  },
  Make: {
    type: String,
    trim: true,
  },
  Type: {
    type: String,
    trim: true,
  },
  washers: {
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
 },
});
module.exports = mongoose.model('Vehicle', vehicleSchema);