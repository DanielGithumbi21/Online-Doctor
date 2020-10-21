const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  checkUp: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const post = mongoose.model("patientPosts", newSchema);
module.exports = post;
