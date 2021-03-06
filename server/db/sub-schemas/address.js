import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

/* eslint-disable */
export const addressSchema = new Schema({
  address: {
    type: String,
    required: [true, 'address is required']
  },
  city: {
    type: String,
    required: [true, 'city is required']
  },
  state: {
    type: String,
    required: [true, 'state is required']
  },
  postalCode: Number
});