import faker from 'faker';

export const users = [
  {
    firstname: 'admin',
    lastname: 'admin',
    gender: 0,
    email: 'admin@shoppa.com',
    password: 'admin',
    address: faker.address.streetAddress(true),
    imgUrl: '',
    role: 'ADMIN',
    isVerified: 1,
    isActive: 1,
    timestamp: {},
  }
];
