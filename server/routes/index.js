const shopRoutes = require('./shop');

const appRouter = app => {
  app.use('/shop', shopRoutes);
}

module.exports = appRouter;