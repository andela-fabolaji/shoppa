const asyncWrapper = asyncFn => {
  // return (req, res, next) => {
  //   Promise.resolve(asyncFn(req, res, next))
  //     .catch((next));
  // };

  return (req, res, next) => {
    asyncFn(req, res);
  }
};

export default asyncWrapper;