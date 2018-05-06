import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

const productSchema = new Schema({
  name: {
    type: String,
    required: []
  },
  categoryId: []
});

/* eslint-disable */
export const Product = mongoose.model('Products', productSchema);