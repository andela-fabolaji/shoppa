import dotenv from 'dotenv';

dotenv.config({ silent: true });

export default {
  uri: process.env.DB_URI,
  name: process.env.DB_NAME,
  options: {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
  }
};