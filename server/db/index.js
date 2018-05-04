import mongoose from 'mongoose';
import es6Promise from 'es6-promise';
import { handler } from '../exceptions/conn.error';
import { devConfig, testConfig, prodConfig }  from './config';

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
    switch(process.env.NODE_ENV) {
      case 'development': Db.connectDev(devConfig);
        break;

      case 'test': Db.connectDev(testConfig);
        break;
      
      default:
        Db.connectProd(prodConfig);
    }

    const db = mongoose.connection;

    db.on('error', handler);
    db.once('open', function() {
      console.info('Connection Established');
    });
  }

  static connectProd({ uri }) {
    return mongoose.connect(uri);
  }

  static connectDev(config) {
    return mongoose.connect(`${config.uri}/${config.name}`, config.options);
  }
}

export default Db;
