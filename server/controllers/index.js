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
  constructor(model, context) {
    this.model = model;
    this.context = context;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  /**
   * create() creates a new record
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  async create(req, res) {
    const resource = new this.model(req.body);

    try {
      const savedResource = await resource.save();
      res.status(201).json({
        data: savedResource
      });
    } catch(err) {
      res.status(500).json({
        error: {
          message: `unable to create ${this.context}`
        }
      });
    }
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

module.exports = BaseController;