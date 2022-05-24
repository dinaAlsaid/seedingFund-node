"use strict";

const schema = require("./todoSchema.js");

class TodoCollection {
  constructor() {
    this.Model = schema;
  }
  read(_id) {
    //if id exist find by id if not find all
    let id = _id ? { _id } : {};
    return this.Model.find(id);
  }
  create(record) {
    const newRec = new this.Model(record);
    return newRec.save();
  }
  update(_id, record) {
    return this.Model.findOneAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return this.Model.findOneAndDelete(_id);
  }
}

module.exports = new TodoCollection();
