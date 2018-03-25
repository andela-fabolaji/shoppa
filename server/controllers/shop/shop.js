import BaseController from '../';
import ShopModel from '../../db/schemas/shop';

/**
 * @classdesc shop controller
 * @extends BaseController
 */
class Shop extends BaseController {

  /**
   * constructor() creates a Shop instance
   * 
   * @param {Object} model 
   */
  constructor(model) {
    super(model, 'shop');
  }
}

export default new Shop(ShopModel);
