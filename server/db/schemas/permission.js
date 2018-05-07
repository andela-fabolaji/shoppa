import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';
import { timeStampSchema } from '../sub-schemas/timestamp';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

const permissionsSchema = new Schema({
  _id: {
    type: String,
    required: [true, 'please supply a valid id']
  },
  description: {
    type: String,
  },
  timestamp: {
    type: timeStampSchema,
  }
});

/* eslint-disable */
export const Permission = mongoose.model('Permission', permissionsSchema);
