'use strict';

const schema = require('./todoSchema.js');
const Collection = require('./base.collection.js');

class TodoCollection extends Collection {
  constructor() {
    super(schema);
  }
}

module.exports = new TodoCollection();
