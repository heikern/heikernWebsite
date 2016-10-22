var routes = require('express').Router();

var all = require('./all.js')

var award = require('./awards.js')

routes.route('/').get(all);

routes.route('/awards').get(award.all);

routes.route('/awards/:id').get(award.single)

module.exports = routes;