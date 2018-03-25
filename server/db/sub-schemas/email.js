import mongoose, { mongo } from 'mongoose';
import es6Promise from 'es6-promise';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

const Schema = mongoose.Schema;

export const emailSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: (v) => {
        return new Promise((resolve) => {
          resolve(/[a-zA-Z]+/.test(v));
        });
      },
      message: 'incorrect email format'
    },
    required: [true, 'email is required']
  }
});