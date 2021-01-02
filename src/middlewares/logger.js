const logger = (store) => (next) => (action) => {
  console.log('Logging all the actions..');
  return next(action);
};
export default logger;
