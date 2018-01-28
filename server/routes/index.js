// main deps
const express = require('express');
const router = express.Router();

// router modules
const userRoutes = require('./user')(router);
const shopRouter = require('./shop')(router);

// app route middleware
const appRouter = app => {
  app.use('/users', userRoutes);
  app.use('/shops', shopRouter);
}

module.exports = appRouter;