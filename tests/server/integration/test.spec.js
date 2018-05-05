import { expect } from 'chai';
import supertest from 'supertest';
import http from 'http';
import app from '../../../server/index';

const server = http.createServer(app);
const request = supertest(server);

describe('HOME', () => {
  it('should return a welcome message for default route', (done) => {
    request.get('/api')
      .end((err, res) => {
        expect(res.body.message).equal('welcome stranger');
        done();
      });
  });

  it('should return 404 if a route doesn\'t exist', (done) => {
    request.get('/')
      .end((err, res) => {
        expect(res.status).equal(404);
        expect(res.body.message).equal('This route does not exist');
        done();
      });
  });
});

