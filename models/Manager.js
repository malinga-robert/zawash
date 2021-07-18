const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const managerSchema = new mongoose.Schema({
    fullname: {
      type: String,
      trim: true,
      required: "Please provide fullnames",
    },
    email: {
      type: String,
      required: "Please provide username",
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    }
    
})
    
  // managerSchema.plugin(passportLocalMongoose);

  managerSchema.plugin(passportLocalMongoose,{usernameField: 'email'});
  module.exports = mongoose.model('Manager', managerSchema);
