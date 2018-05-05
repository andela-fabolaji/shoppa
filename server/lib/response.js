import { OK, CREATED, NOT_FOUND, DUPLICATE_RES, SERVER_ERR } from './response.code';

/**
 * @classdesc Response handler
 */
class Response {
  /**
   * @description retuns an okay response
   * @memberOf Response
   *
   * @param {Object} res - response object
   * @param {Object} resData - response data
   * @returns {Null} - no return value
   */
  static okay(res, resData) {
    res
      .status(OK)
      .json(resData);
  }

  /**
   * @description retuns an okay response
   * @memberOf Response
   *
   * @param {Object} res - response object
   * @param {Object} resData - response data
   * @returns {Null} - no return value
   */
  static created(res, resData) {
    res
      .status(CREATED)
      .json(resData);
  }

  /**
   * @description returns a 404 response to client
   * @memberOf Response
   *
   * @param {Object} res - response object
   * @param {Object} type - resource type
   * @returns {Null} - no return value
   */
  static notFound(res, type) {
    res
      .status(NOT_FOUND)
      .json({ message: `Sorry! ${type}(s) was not found.` });
  }

  /**
   * @description returns a duplicate resource response
   * @memberOf Response
   *
   * @param {Object} res - response object
   * @param {Object} type - resource type
   * @returns {Null} - no return value
   */
  static duplicateResource(res, type) {
    res
      .status(DUPLICATE_RES)
      .json({ message: `Sorry! ${type} already exists.` });
  }

  /**
   * @description retuns server error response
   * @memberOf Response
   *
   * @param {Object} res - response object
   * @param {Object} resData - response data
   * @returns {Null} - no return value
   */
  static serverError(res, resData) {
    res
      .status(SERVER_ERR)
      .json(resData);
  }
}

export default Response;
