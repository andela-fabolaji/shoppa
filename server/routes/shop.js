const Shop = require('../controllers/shop/shop');

/**
 * shopRouter() manages shop routes
 * 
 * @param {Object} router
 * @return {Object} router
 */
const shopRouter = router => {
  router.route('/')
    .get(Shop.getAll);
  
  return router;
}

module.exports = shopRouter;
