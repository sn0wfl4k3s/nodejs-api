'use strict'

const routes = require('express').Router()
const controller = require('./controllers/user.controller')

routes.route('/user')
  .get(controller.get)
  .post(controller.post)
routes.route('/user/:id')
  .put(controller.put)
  .delete(controller.delete)

module.exports = routes