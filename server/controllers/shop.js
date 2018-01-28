/**
 * @class
 * @classdesc shop controller
 */
class Shop {

  /**
   * create() creates new shop
   * @param {Object} req 
   * @param {Object} res 
   */
  static create(req, res) {
    res.status(201).json({
      name: 'John Doe'
    });
  }

  /**
   * getAll()
   * @param {Object} req 
   * @param {Object} res 
   */
  static getAll(req, res) {
    res.status(200).json({
      data: [
        {
          name: 'Daniella Winter'
        },
        {
          name: 'Femi Alabi'
        },
        {
          name: 'Chisom Amaru'
        }
      ]
    });
  }

  static getOne(req, res) {
    console.log(req.params);
    res.status(200 ).json({
      data: {
        name: 'John Doe'
      }
    });
  }
}

module.exports = User;
