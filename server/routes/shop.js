import Shop from '../controllers/shop/shop';

/**
 * shopRouter() manages shop routes
 * 
 * @param {Object} router
 * @return {Object} router
 */
const shopRouter = router => {
  router.route('/')
    .get(Shop.findAll);
  
  return router;
}

export default shopRouter;
