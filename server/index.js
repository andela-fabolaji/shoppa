// main deps
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';
import socket from 'socket.io';
import helmet from 'helmet';
import winston from 'winston';

// modules
import mapRoutes from './routes';
import Db from './db';
import socketService from './services/socket';

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

// socket
socketService(io);

// middleware
app.use(helmet());
app.use(helmet.noCache());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.status(200).send({ message: 'welcome stranger' });
});

// map each route to it's handler
Reflect.ownKeys(mapRoutes).forEach((route) => {
  app.use(route, mapRoutes[route](express.Router()));
});

app.all('*', (req, res) => res.status(404).json({ message: 'This route does not exist' }));

// error handler
app.use((err, req, res, next) => {
  res.status(422).json({
    status: 422,
    message: 'Something went wrong here',
    title: err.statusText,
  });
});

// serve
server.listen(port, (err) => {
  if (!err) {
    winston.log(`App served on http://localhost:${port} in ${env} mode`);
  }
});

export default app;
