const mongoose = require("mongoose");

const project = mongoose.Schema({
  projectName: { type: "string", required: true },
  description: { type: "string", required: true },
  sector: { type: "string", enum: ["private", "government"] },
  status: { type: "string", default: "pending", enum: ["pending", "rejected", "approved"] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const seedingFundDB = mongoose.connection.useDb("seedingFund");
module.exports = seedingFundDB.model("project", project);
