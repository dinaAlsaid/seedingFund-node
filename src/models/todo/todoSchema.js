"use strict";
const mongoose = require("mongoose");

const todo = mongoose.Schema({
  text: { type: String, required: true },
  status: { type: String, required: true, default: "todo" },
  importance: { type: Number, required: true },
  assignee: { type: String, required: true },
});

module.exports = mongoose.model("todo", todo);
