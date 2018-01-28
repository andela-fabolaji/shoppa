const User = require('../controllers/user');
/**
 * GET
 * /
 * /:userId
 * /:userId/purchases
 * /:userId/cart
 * /:userId/wishList
 * 
 * POST
 * /
 * 
 * PUT
 * users/:userId
 * 
 * DELETE
 * users/:userId
 */

/**
 * userRouter() manages user routes
 * 
 * @param {Object} router
 * @return {Object} router
 */
const userRouter = router => {
  router.route('/')
    .get(User.getAll)
    .post(User.create)
  
  router.route('/:userId')
    .get(User.getOne)
  
  return router;
}

module.exports = userRouter;
