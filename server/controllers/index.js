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
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findById = this.findById.bind(this);
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
          title: '',
          detail: `unable to create ${this.context}`
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
  findAll(req, res) {
    res.status(200).json({
      data: {
        message: 'success',
        list: []
      }
    });
  }

  async findOne(req, res) {
    try {
      const resource = this.model.findOne(req.query).exec();
      return resource;
    } catch (err) {
      res.send(err);
    }
  }

  /**
   * getById() returns an entry from a collection
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  async findById(req, res) {
  }
}

export default BaseController;