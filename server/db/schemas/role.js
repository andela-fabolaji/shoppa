import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';
import { timeStampSchema } from '../sub-schemas/timestamp';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

/**
 * role types: admin, buyer, vendor, shopadmin
 */
const roleSchema = new Schema({
  title: {
    type: String,
    validate: {
      validator: value => /[a-zA-Z]+/.test(value),
      message: 'Title can only be alphabets'
    },
    unique: [true, 'This role already exists'],
    required: [true, 'Role title is required']
  },
  description: {
    type: String,
  },
  permissions: [{
    type: Schema.Types.ObjectId,
    ref: 'Permission'
  }],
  timestamp: timeStampSchema,
});

/* eslint-disable */
export const Role = mongoose.model('Role', roleSchema);