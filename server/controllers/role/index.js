import BaseController from '../';
import { Role, Permission } from '../../db';
import Response from '../../lib/response';

/**
 * @classdesc shop controller
 * @extends BaseController
 */
class RoleController extends BaseController {
  /**
   * constructor() creates a Shop instance
   *
   * @param {Object} model
   */
  constructor(model) {
    super(model, 'role');
    this.findAllRoles = this.findAllRoles.bind(this);
  }

  /**
   * @description finds all roles
   * @memberof RoleController
   *
   * @returns {Null} - no return value
   */
  async findAllRoles(req, res) {
    try {
      const populateQuery = {
        path: 'permissions',
        select: '_id',
        model: Permission
      };
      const roles = await this.model.find({}).populate(populateQuery);
      const resData = {
        message: 'Roles retrieved!',
        roles
      };
      Response.okay(res, resData);
    } catch (err) {
      throw err;
    }
  }
}

export const roleCtrl = new RoleController(Role);
