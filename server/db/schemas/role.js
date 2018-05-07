import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';
import { timeStampSchema } from '../sub-schemas/timestamp';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

/**
 * role types: admin, buyer, vendor, shopadmin
 */
const roleSchema = new Schema({
  _id: {
    type: String,
    required: [true, 'Please provide role id.']
  },
  description: {
    type: String,
  },
  permissions: [{
    type: String,
    ref: 'Permission'
  }],
  timestamp: timeStampSchema
});

/* eslint-disable */
export const Role = mongoose.model('Role', roleSchema);