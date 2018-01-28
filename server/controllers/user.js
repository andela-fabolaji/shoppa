const BaseController = require('./');
const Schema = require('../db/schemas/user');

/**
 * @classdesc user controller
 * @extends BaseController
 */
class User extends  BaseController {

  /**
   * constructor() creates a new User instance
   * 
   * @param {Object} schema 
   * @param {String} context 
   */
  constructor(schema, context) {
    super(schema, 'user');
  }
}

module.exports = new User(Schema);
