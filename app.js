require("dotenv").config();
const express = require("express");
const router = require("./routes");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

const initial_db = fs
  .readFileSync(path.join(__dirname, "./init.sql"))
  .toString();

db.query(initial_db, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("success");
  }
});

app.use(express.json());

app.use(router);
app.use("*", (req, res, next) => {
  next(res.send({ resp: `welcome to the app` }));
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
