const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  item: {
    type: String,
    trim: true,
  },
  itemCost: {
    type: Number,
    trim: true,
  },
  currentdate: {
    type: Date,
    trim: true,
  },
  
});
module.exports = mongoose.model('Expense', expenseSchema);