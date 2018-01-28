require('dotenv').config({ silent: true });

const mongoose = require('mongoose');
const dbUri = process.env.DB_URI;

/**
 * @class
 * @classdesc handles database connections
 */
class Db {

  /**
   * creates db connection
   */
  static connect() {
    return mongoose.createConnection(dbUri, {
      socketTimeoutMS: 5000,
      keepAlive: true,
      reconnectTries: 30
    });
  }
}

module.exports = Db;
