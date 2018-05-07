import { roleCtrl } from '../controllers';
import asyncWrapper from '../lib/asyncWrapper';

/**
 * @description manages shop routes
 *
 * @param {Object} router - router object
 * @return {Object} router object
 */
export const roleRouter = (router) => {
  router.route('/')
    .get(roleCtrl.findAllRoles);

  return router;
};

