import Response from '../lib/response';

/**
 * @classdesc extensible CRUD class
 */
class BaseController {
  /**
   * @description creates a new BaseController instance
   *
   * @param {Object} model
   * @param {String} context
   * @returns {Null} - no return value
   */
  constructor(model, context) {
    this.model = model;
    this.context = context;
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findById = this.findById.bind(this);
  }

  /**
   * @description creates a new record
   *
   * @param {Object} req - request object
   * @param {Object} res - response object
   * @returns {Null} - no return value
   */
  async create(req, res) {
    const resource = new this.model(req.body);
    let resData = {};

    try {
      const savedResource = await resource.save();
      resData = {
        message: `${this.context} successfully created!`,
        data: savedResource
      };
      Response.created(res, resData);
    } catch (err) {
      resData = {
        title: `unable to create ${this.context}`,
        detail: []
      };
      Response.serverError(res, resData);
    }
  }

  /**
   * @description returns all data for a collection
   * @memberof BaseController
   *
   * @param {Object} req - request object
   * @param {Object} res - response object
   * @returns {Null} - no return value
   */
  async findAll(req, res) {
    // this.model.find();
    const resData = {
      message: `${this.context} found!`,
      data: [
        {}
      ]
    };
    Response.okay(res, resData);
  }

  /**
   * @description returns single object from collection
   * matching id passed
   * @memberof BaseController
   *
   * @param {Object} req - request object
   * @param {Object} res - response object
   * @returns {Null} - no return value
   */
  async findById(req, res) {
    // TODO: Complete implementation
    this.model.find();
    const payload = {
      message: 'user found',
      data: {
        type: 'test user',
        name: 'john doe'
      }
    };
    Response.okay(res, payload);
  }

  /**
   * @description returns single object from collection
   * matching query passed
   * @memberof BaseController
   *
   * @param {Object} req - request object
   * @param {Object} res - response object
   * @returns {Null} - no return value
   */
  async findOne(req, res) {
    try {
      const resource = await this.model.findOne(req.query).exec();
      return resource;
    } catch (err) {
      res.send(err);
    }
  }
}

export default BaseController;
