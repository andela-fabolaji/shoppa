// main deps
const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const socket = require('socket.io');
const fs = require('fs');

// modules
const appRoutes = require('./server/routes');

// dotenv
dotenv.config({ silent: true });

// constants
const app = express();
const server = http.Server(app);
const io = socket(server);
const env = process.env.NODE_ENV;
const port = process.env.PORT;

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));

// route handler
appRoutes(app);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.all('*', (req, res) => res.sendStatus(404));

// serve
app.listen(port, err => {
  !err && console.log(`App served on http://localhost:${port}`);
});