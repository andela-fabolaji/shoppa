import { userCtrl } from '../controllers';
import Validator from '../middleware/validation';
import asyncWrapper from '../lib/asyncWrapper';

/**
 * @description manages user routes
 *
 * @param {Object} router - router object
 * @returns {Object} - router object
 */
export const userRouter = (router) => {
  router.route('/')
    .get(userCtrl.findAll)
    .post(Validator.signup(), asyncWrapper(userCtrl.create));

  router.post('/login', Validator.login(), userCtrl.login);

  router.route('/:userId')
    .get()
    .put()
    .patch()
    .delete();

  return router;
};
