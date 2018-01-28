const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  imgUrl: String,
  isVerified: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', userSchema);