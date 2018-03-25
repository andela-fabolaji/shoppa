import validate from 'express-validation';
const Joi = require('joi');

/**
 * @classdesc handles validations elegantly
 */
class Validator {
  
  /**
   * validates user login details
   * @param {Object} req
   * @returns {Object} validate
   */
  static login() {
    return validate({
      body: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
      })
    });
  }

  /**
   * validates user login details
   * @param {Object} req
   * @returns {Object} validate
   */
  static signup() {
    return validate({
      body: Joi.object().keys({
        firstname: Joi.string().regex(/[a-zA-z]+/).required(),
        lastname: Joi.string().regex(/[a-zA-z]+/).required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
      })
    });
  }
}

export default Validator;