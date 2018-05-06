import BaseController from '../';
import { User } from '../../db';

/**
 * @classdesc user controller
 * @extends BaseController
 */
class UserController extends BaseController {
  /**
   * @description creates a new User instance
   *
   * @param {Object} model
   */
  constructor(model) {
    super(model, 'user');
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  /**
   * @description signup method
   *
   * @param {Object} req - sign up request object
   * @param {Object} res - response object
   * @returns {Null} - no return value
   */
  signup(req, res) {
    super.create(req, res);
  }

  /**
   * @description log in
   * @param {Object} req - log in request object
   * @param {Object} res - response object
   * @returns {Null} - no return value
   */
  login(req, res) {
    req.query = {
      email: req.email
    };

    return super.findOne(req, res);
  }
}

export const userCtrl = new UserController(User);

