/**
 * @class BaseController
 * @classdesc extensible CRUD class
 */
class BaseController {
  constructor(schema, ctx) {
    this.schema = schema;
    this.ctx = ctx;
  }
  
  /**
   * getAll() gets all data for a particular
   * context
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  getAll(req, res) {
    res.status(200).json({
      msg: 'get all'
    });
  }

  /**
   * getById() gets all data for a particular
   * context
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  getById(req, res) {
    res.status(200).json({
      msg: 'get by id'
    });
  }
}