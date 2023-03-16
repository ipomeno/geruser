const userRoutes = require('./modules/users/routes');

module.exports = (app) => {
  userRoutes(app);
};