import mongoose, { mongo } from 'mongoose';
import es6Promise from 'es6-promise';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

const Schema = mongoose.Schema;

export const timeStampSchema = new Schema({
  timeStamps: {
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date,
  },
});