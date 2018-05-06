import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';
import { timeStampSchema } from '../sub-schemas/timestamp';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

const permissionsSchema = new Schema({
  title: {
    type: String,
    validate: {
      validator: value => /[a-zA-Z]+/.test(value),
      message: 'Title can only be alphabets'
    },
    unique: [true, 'This role already exists'],
    required: [true, 'Permission title is required']
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
