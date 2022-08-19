const express = require("express");
const router = require("./routes");
const app = express();
const PORT = process.env.PORT || 8000;
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
  const sql = "";
});

app.use(express.json());
app.use(router);

app.use("*", (req, res, next) => {
  next(console.log(`welcome to the main route`));
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
