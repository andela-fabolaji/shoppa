/**
 * @classdesc extensible CRUD class
 */
class BaseController {
  
  /**
   * constructor() creates a new BaseController instance
   * 
   * @param {Object} schema 
   * @param {String} context
   */
  constructor(schema, context) {
    this.schema = schema;
    this.context = context;
  }

  /**
   * create() creates a new record
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  create(req, res) {
    res.status(200).json({
      msg: 'get all'
    });
  }
  
  /**
   * getAll() returns all data for a collection
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
   * getById() returns an entry from a collection
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