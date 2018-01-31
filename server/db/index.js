require('dotenv').config({ silent: true });

const mongoose = require('mongoose');
const dbUri = process.env.DB_URI;
const options = {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
};

/**
 * @classdesc handles database connections
 */
class Db {

  /**
   * creates db connection
   */
  static connect() {
    mongoose.connect(dbUri, options);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection Failed:'));
    db.once('open', function() {
      console.log('Connection Established');
    });
  }
}

module.exports = Db;
