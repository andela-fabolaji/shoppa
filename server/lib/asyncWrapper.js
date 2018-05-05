/* eslint-disable */
const asyncWrapper = (asyncFn) => {
  return (req, res, next) => {
    return Promise.resolve(asyncFn(req, res, next))
      .catch(next(err));
  }
};

export default asyncWrapper;
