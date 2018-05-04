import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';
import bcrypt from 'bcrypt';
import { emailSchema, timeStampSchema, addressSchema } from '../sub-schemas';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

const userSchema = new Schema({
  firstname: {
    type: String,
    validate: {
      validator: (field) => {
        return /[a-zA-Z]+/.test(field);
      },
      message: 'name can only contain alphabets'
    },
    required: [true, 'first name is required']
  },
  lastname: {
    type: String,
    validate: {
      validator: (field) => {
        return new Promise((resolve) => {
          resolve(/[a-zA-Z]+/.test(field));
        });
      },
      message: 'name can only contain alphabets'
    },
    required: [true, 'last name is required']
  },
  gender: {
    type: Boolean,
    default: 1
  },
  email: {
    type: String,
    validate: {
      validator: (field) => {
        return new Promise((resolve) => {
          resolve(/^[a-z0-9_.]+@[a-z]+\.[a-z]+$/i.test(field));
        });
      },
      message: 'Invalid email format'
    },
    unique: true
  },
  password: {
    type: String,
    min: [8, 'password cannot be less than 8 characters'],
  },
  timeStamps: timeStampSchema,
  imgUrl: String,
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  permissions: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  address: {
    type: [addressSchema],
    default: []
  }
});

userSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) return next();
  user.password = await bcrypt.hash(user.password, 10);
  next();
}); 

export default mongoose.model('User', userSchema);