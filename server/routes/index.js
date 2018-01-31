// main deps
const express = require('express');
const router = express.Router();

// router modules
const userRouter = require('./user')(router);
const shopRouter = require('./shop')(router);

// app route middleware
const appRouter = app => {
  app.use('/users', userRouter);
  app.use('/shops', shopRouter);
}

module.exports = appRouter;