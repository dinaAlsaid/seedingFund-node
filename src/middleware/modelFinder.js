'use strict';
function modelFinder(req, res, next) {
  let modelName = req.params.model;
  switch (modelName) {
  case 'projects':
    req.model = require('../../models/products/products.collection.js');
    break;
  case 'todo':
    req.model = require('../../models/journal/todo.collection.js');
    break;
  default:
    throw new Error('invalid model name');
  }
  next();
}

module.exports = modelFinder;
