import user from '../controllers/user/user';
import Validator from '../middleware/validation';

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
    .get(user.findAll)
    .post(Validator.signup(), user.signup);
  
  router.post('/login', Validator.login(), user.login)
  
  router.route('/:userId')
    .get(user.findById)
  
  return router;
}

export default userRouter;
