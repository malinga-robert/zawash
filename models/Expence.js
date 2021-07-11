const mongoose = require('mongoose');

const expenceSchema = new mongoose.Schema({
  Polish: {
    type: String,
    trim: true,
  },
  polishCost: {
    type: String,
    trim: true,
  },
  Detergents: {
    type: String,
    trim: true,
  },
  detergentsCost: {
    type: String,
    trim: true,
  },
  Electricity: {
    type: String,
    trim: true,
  },
  electricityCost: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model('Expence', expenceSchema);