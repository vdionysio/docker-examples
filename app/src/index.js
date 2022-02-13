const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "test",
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM Product", (err, rows) => {
    if (err) {
      res.json({
        err,
      });
    } else {
      res.json({
        rows,
      });
    }
  });
});

app.get('/', (req, res) => {
  res.send('okassssys')
});

app.listen(5000, () => console.log("listening on port 5000"));