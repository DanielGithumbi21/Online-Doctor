const router = require("express").Router();

const Post = require("../models/doctorPost.model");
const { renderSync } = require("node-sass");

router.route("/").get((req, res) => {
  Post.find()
    .then((doctorPosts) => res.json(doctorPosts))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const results = req.body.results;

  const newPost = new Post({
    name,
    email,
    results,
  });

  newPost
    .save()
    .then(() => res.json("success"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
