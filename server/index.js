// main deps
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import socket from 'socket.io';
import mongodb from 'mongodb';

// modules
import appRoutes from './routes';
import Db from './db';

// dotenv
dotenv.config({ silent: true });

// constants
const app = express();
const server = http.Server(app);
const io = socket(server);
const env = process.env.NODE_ENV;
const port = process.env.PORT;

// db instance -> using the mongodb native api directly
// const db = Db.classicConnect(mongodb.MongoClient);
// global.db = db;

// db instace 
Db.connect();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// app.use(express.static('client'));

// route handler
appRoutes(app);

// app.get('/', (req, res) => {
//   res.sendFile('client/index.html');
// });

app.all('*', (req, res) => res.sendStatus(404));

// serve
app.listen(port, err => {
  !err && console.log(`App served on http://localhost:${port}`);
});