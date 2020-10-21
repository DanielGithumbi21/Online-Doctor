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
  results: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("doctorPosts", newSchema);
module.exports = Post;
