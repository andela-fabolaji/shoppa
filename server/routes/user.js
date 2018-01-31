const user = require('../controllers/user');

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
    .get(user.getAll)
    .post(user.create)
  
  router.route('/:userId')
    .get(user.getById)
  
  return router;
}

module.exports = userRouter;
