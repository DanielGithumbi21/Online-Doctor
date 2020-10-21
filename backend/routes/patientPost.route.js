const router = require("express").Router();
const post = require("../models/PatientPost.model");

router.route("/").get((req, res) => {
  post
    .find()
    .then((patientPosts) => res.json(patientPosts))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const county = req.body.county;
  const age = req.body.username;
  const gender = req.body.gender;
  const checkUp = req.body.checkUp;
  const description = req.body.description;

  const newPost = new post({
    name,
    email,
    county,
    age,
    gender,
    checkUp,
    description,
  });
  newPost
    .save()
    .then(() => res.json("success"))
    .catch((err) => res.status(400).json("error" + err));
});

module.exports = router;
