import mongoose, { mongo } from 'mongoose';
import es6Promise from 'es6-promise';
import { emailSchema, timeStampSchema } from '../sub-schemas'

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

const Schema = mongoose.Schema;

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
      validator: (v) => {
        return new Promise((resolve) => {
          resolve(/[a-zA-Z]+/.test(v));
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
  email: emailSchema,
  password: {
    type: String,
    required: [true, 'first name is required']
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
  }
});

export default mongoose.model('User', userSchema);