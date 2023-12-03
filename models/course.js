const mongoose = require("mongoose");

const course = mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },

  content: {
    type: String,
    require: true,
  },

  author: {
    type: String,
    require: true,
  },

  videos: {
    type: Number,
    require: true,
  },

  active: Boolean,
});

module.exports = mongoose.model("courses_node_api", course);
