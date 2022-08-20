const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  multipleStatements: true,
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
