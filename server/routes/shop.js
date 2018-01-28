/**
 * shopRouter() manages shop routes
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
