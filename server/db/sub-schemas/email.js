import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

export const emailSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: (field) => {
        return new Promise((resolve) => {
          resolve(/^[a-z0-9_.]+@[a-z]+\.[a-z]+$/i.test(field));
        });
      },
      message: 'Invalid email format'
    },
    unique: true
  }
});
