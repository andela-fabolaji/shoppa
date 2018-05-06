import { shopCtrl } from '../controllers';

/**
 * @description manages shop routes
 *
 * @param {Object} router - router object
 * @return {Object} router object
 */
export const shopRouter = (router) => {
  router.route('/')
    .get(shopCtrl.findAll)
    .post();

  return router;
};

