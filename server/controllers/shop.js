const BaseController = require('./');
const Schema = require('../db/schemas/shop');

/**
 * @classdesc shop controller
 * @extends BaseController
 */
class Shop extends  BaseController {

  /**
   * constructor() creates a Shop instance
   * 
   * @param {Object} schema 
   * @param {String} context 
   */
  constructor(schema, context) {
    super(schema, 'shop');
  }
}

module.exports = new User(Schema);
