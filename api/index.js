const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.get('/', (req, res) => {
  res.send('Hello World 3');
});

app.get('/students', (req, res) => {
  connection.query('SELECT * FROM Student', (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        rows,
      });
    }
  });
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`listening on port ${port}`));
