const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    default: "not important",
  },
  Date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("task", TaskSchema);
