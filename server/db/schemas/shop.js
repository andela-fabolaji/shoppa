import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';
import { emailSchema } from '../sub-schemas/email';
import { timeStampSchema } from '../sub-schemas/timestamp';
import { addressSchema } from '../sub-schemas/address';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

const shopSchema = new Schema({
  shopname: {
    type: String,
    validate: {
      validator: (field) => {
        return /[a-zA-Z]+/.test(field);
      },
      message: 'name can only contain alphabets'
    },
    required: [true, 'first name is required']
  },
  addresses: [addressSchema],
  email: emailSchema,
  password: {
    type: String,
    required: [true, 'first name is required']
  },
  timestamp: timeStampSchema,
  imgUrl: String,
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  userType: {
    type: [String],
  }
});

/* eslint-disable */
export const Shop = mongoose.model('Shop', shopSchema);