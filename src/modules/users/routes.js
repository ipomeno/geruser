const express = require('express');
const controller = require('./controller');

const router = express.Router();
const domain = '/users/';

module.exports = (app) => {
  router.put(domain, [controller.insert]);
  router.post(domain, [controller.update]);
  router.delete(domain, [controller.delete]);
  router.get(domain, [controller.list]);
  router.get(`${domain}:id`, [controller.find]);

  app.use(router);
};