import Shop from '../controllers/shop/shop';

/**
 * create shop
 * edit shop details
 *
 */

/**
 * shopRouter() manages shop routes
 *
 * @param {Object} router
 * @return {Object} router
 */
const shopRouter = (router) => {
  router.route('/')
    .get(Shop.findAll)
    .post();

  return router;
};

export default shopRouter;
