const BaseController = require('./');
const ShopModel = require('../db/schemas/shop');

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

module.exports = new Shop(ShopModel);
