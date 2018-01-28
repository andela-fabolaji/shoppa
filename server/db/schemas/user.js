const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
  firstname: {
    type: String,
    validate: {
      validator: (v) => {
        return new Promise((resolve) => {
          resolve(/[a-zA-Z]+/.test(v));
        });
      },
      message: 'name can only contain alphabets'
    },
    required: [true, 'first name is required']
  },
  lastname: {
    type: String,
    validate: {
      validator: (v) => {
        return new Promise((resolve) => {
          resolve(/[a-zA-Z]+/.test(v));
        });
      },
      message: 'name can only contain alphabets'
    },
    required: [true, 'last name is required']
  },
  email: {
    type: String,
    validate: {
      validator: (v) => {
        return new Promise((resolve) => {
          resolve(/[a-zA-Z]+/.test(v));
        });
      },
      message: 'incorrect email format'
    },
    required: [true, 'email is required']
  },
  password: {
    type: String,
    required: [true, 'first name is required']
  },
  timeStamps: {
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date,
  },
  imgUrl: String,
  isVerified: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', userSchema);