import mongoose from 'mongoose';
import es6Promise from 'es6-promise';
import winston from 'winston';
import handler from '../exceptions/connection';
import { devConfig, testConfig, prodConfig } from './config';
import { run, flush } from '../services/seeder';

mongoose.Promise = es6Promise.Promise;
es6Promise.polyfill();

/**
 * @classdesc handles database connections
 */
export default class Db {
  /**
   * @description creates db connection
   * @memberof Db
   *
   * @returns {Null} - no return value
   */
  static connect() {
    switch (process.env.NODE_ENV) {
      case 'development': Db.connectDev(devConfig);
        break;

      case 'test': Db.connectDev(testConfig);
        break;

      default:
        Db.connectProd(prodConfig);
    }

    const db = mongoose.connection;

    db.on('error', handler);
    db.once('open', () => {
      winston.info('Connection Established');
      flush(mongoose);
      run();
    });
  }

  /**
   * @description connects prod db
   * @memberof Db
   *
   * @param {String} param0 - db url
   * @returns {Object} - mongoose connection
   */
  static connectProd({ uri }) {
    return mongoose.connect(uri);
  }

  /**
   * @description connects dev db
   * @memberof Db
   *
   * @param {Object} config - db config
   * @returns {Object} - mongoose connection
   */
  static connectDev(config) {
    return mongoose.connect(`${config.uri}/${config.name}`, config.options);
  }
}
