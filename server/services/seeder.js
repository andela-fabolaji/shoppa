import async from 'async';
import { Role, User, Permission } from '../db';
import { permissions, roles, users } from '../db';

export const run = () => {
  async.waterfall(
    [
      (callback) => {
        Permission.insertMany(permissions, callback);
      },
      (result, callback) => {
        Role.insertMany(roles, callback);
      }
    ],
    (err, result) => {
      if (err) {
        return console.error('Something went wrong during seeding.\n', err.message);
      }
      console.log('All good! DB successfully seeded');
    }
  );
};

export const flush = (mongoose) => {
  return mongoose.connection.db.dropDatabase();
};
