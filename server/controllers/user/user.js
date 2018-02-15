const BaseController = require('../');
const UserModel = require('../../db/schemas/user');

/**
 * @classdesc user controller
 * @extends BaseController
 */
class User extends BaseController {

  /**
   * constructor() creates a new User instance
   * 
   * @param {Object} model 
   */
  constructor(model) {
    super(model, 'user');
  }
}

module.exports = new User(UserModel);
