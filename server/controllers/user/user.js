import BaseController from '../';
import UserModel from '../../db/schemas/user';

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

  signup(req, res) {
    return super.create(req, res);
  }

  login(req, res) {
    req.query = {
      email: req.email
    };

    return super.findOne(req, res);
  }
}

export default new User(UserModel);
