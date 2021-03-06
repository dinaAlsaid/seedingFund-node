"use strict";
const mongoose = require("mongoose");

const todo = mongoose.Schema({
  text: { type: String, required: true, unique: true },
  status: { type: String, default: "todo", enum: ["todo", "doing", "done"] },
  importance: { type: Boolean, required: true, default: false },
  difficulty: { type: Number, required: false },
  note: { type: String, required: false },
  due: { type: Date, required: false },
  //key:{type:string,enum},//enums are defined from the user
  //   user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },//not required for now untill authentication done
});
const journalDB = mongoose.connection.useDb("journal");
module.exports = journalDB.model("todoItem", todo);
