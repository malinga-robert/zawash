const mongoose = require('mongoose');

const expenceSchema = new mongoose.Schema({
  item: {
    type: String,
    trim: true,
  },
  itemCost: {
    type: String,
    trim: true,
  },
  currentdate: {
    type: Date,
    trim: true,
  },
  
});
module.exports = mongoose.model('Expence', expenceSchema);