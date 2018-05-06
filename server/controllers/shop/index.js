import BaseController from '../';
import { Shop } from '../../db';

/**
 * @classdesc shop controller
 * @extends BaseController
 */
class ShopController extends BaseController {
  /**
   * constructor() creates a Shop instance
   *
   * @param {Object} model
   */
  constructor(model) {
    super(model, 'shop');
  }
}

export const shopCtrl = new ShopController(Shop);
