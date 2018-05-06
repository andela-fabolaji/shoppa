import mongoose from 'mongoose';
import es6Promise from 'es6-promise';
import { handler } from '../exceptions/conn.error';
import { devConfig, testConfig, prodConfig } from './config';
import { Permission } from './';
import { Role } from './';
import permissionSeed from './seeds/permissions';
import roleSeeds from './seeds/role';

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
      /* eslint-disable no-console */
      console.info('Connection Established');
      // Db.clearDb();
      Db.seed();
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

  /**
   * @description drops database
   * @memberof Db
   *
   * @returns {Object} - mongoose connection
   */
  static clearDb() {
    return mongoose.connection.db.dropDatabase();
  }

  /**
   * @description seeds database
   * @memberof Db
   *
   * @returns {Object} - mongoose connection
   */
  static seed() {
    // permissionSeed.forEach((seed) => {
    //   const newPermission = new Permission(seed);
    //   newPermission.save((err) => {
    //     if (err) throw err;
    //     console.log('saved');
    //   });
    // });

    roleSeeds.forEach((seed) => {
      const newRole = new Role(seed);
      newRole.save((err) => {
        if (err) throw err;
      });
    });
  }
}
