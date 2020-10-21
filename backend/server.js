const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

mongoose.connect(
  "mongodb://127.0.0.1:27017/onlineDoctor",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to Mongo Database");
  }
);

const patientPostRoute = require("./routes/patientPost.route");
app.use("/patientPost", patientPostRoute);

const doctorPostRoute = require("./routes/doctorPost.route");
app.use("/doctorPost", doctorPostRoute);

app.listen(port, () => {
  console.log(`server running on port ${5000}`);
});
