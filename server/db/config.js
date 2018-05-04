import dotenv from 'dotenv';

dotenv.config();

export const devConfig = {
  uri: process.env.DB_URI,
  name: process.env.DB_NAME,
  options: {
    // useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
  }
};

export const testConfig = {
  uri: process.env.DB_URI,
  name: process.env.DB_NAME_TEST,
  options: {
    // useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
  }
};

export const prodConfig = {
  uri: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds223019.mlab.com:23019/shoppa`
}