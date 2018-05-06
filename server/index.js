// main deps
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';
import socket from 'socket.io';

// modules
import { mapRoutes } from './routes';
import Db from './db';

// dotenv
dotenv.config({ silent: true });

// constants
const app = express();
const server = http.createServer(app);
const io = socket.listen(server);
const env = process.env.NODE_ENV;
const port = process.env.PORT;

// db instace
Db.connect();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static('client'));

app.get('/api', (req, res) => {
  res.status(200).send({ message: 'welcome stranger' });
});

// route handler
Reflect.ownKeys(mapRoutes).forEach((route) => {
  // for each route, bind a route handler
  app.use(route, mapRoutes[route]);
});

app.all('*', (req, res) => res.status(404).json({ message: 'This route does not exist' }));

// error handler
app.use((err, req, res, next) => res.status(422).json({
  status: 422,
  title: err.statusText,
  detail: err.errors.map(error => ({
    field: error.field.join(', '),
    message: error.messages.join(', '),
    location: error.location,
  }))
}));

// serve
server.listen(port, (err) => {
  /* eslint-disable no-console */
  if (!err) {
    console.log(`App served on http://localhost:${port}`);
  }
});

export default app;
