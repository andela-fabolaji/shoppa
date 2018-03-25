import mongoose from 'mongoose';
import es6Promise from 'es6-promise';
import { handler } from '../exceptions/conn.error';
import config from './config';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

/**
 * @classdesc handles database connections
 */
class Db {

  /**
   * creates db connection
   */
  static connect() {
    mongoose.connect(`${config.uri}/${config.name}`, config.options);
    const db = mongoose.connection;

    db.on('error', handler);
    db.once('open', function() {
      console.info('Connection Established');
    });
  }
}

export default Db;
