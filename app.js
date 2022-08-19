const express = require("express");
const router = require("./routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const mysql = require("mysql");
const fs = require("fs");
const readline = require("readline");
const myCon = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database: "",
  user: "",
  password: "",
});
const rl = readline.createInterface({
  input: fs.createReadStream("./query.sql"),
  terminal: false,
});
rl.on("line", function (chunk) {
  myCon.query(chunk.toString("ascii"), function (err, sets, fields) {
    if (err) console.log(err);
  });
});
rl.on("close", function () {
  console.log("finished");
  myCon.end();
});

app.use(express.json());
app.use(router);

app.use("*", (req, res, next) => {
  next(console.log(`welcome to the main route`));
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
