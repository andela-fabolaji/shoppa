import mongoose, { Schema } from 'mongoose';
import es6Promise from 'es6-promise';
import { timeStapSchema } from '../sub-schemas';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

var x = 1, y = 2;

const permissionsSchema = new Schema({
  title: '',
  description: '',
  timeStamps: timeStapSchema,
  createdBy: {
    type: Schema.Types.ObjectId
  }
});

export default mongoose.model('Permissions', permissionsSchema);