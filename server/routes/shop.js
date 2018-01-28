/**
 * shopRouter() bootstraps routes for shop
 * 
 * @param {Object} router
 * @return {Object} router
 */
const shopRouter = router => {
  router.route('/')
    .get((req, res) => {
      res.send({
        msg: 'shop route handler active'
      });
    });
  
  return router;
}

module.exports = shopRouter;
