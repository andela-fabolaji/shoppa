const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
  firstname: {
    type: String,
    validate: {
      validator: (v) => {
        return new Promise(resolve => {
          resolve(/[a-zA-Z]+/.test(v));
        });
      },
      message: 'first name can only contain characters'
    },
    required: [true, 'first name is required']
  },
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