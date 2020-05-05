const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'shmetsy',
});

con.connect((err) => {
  if (err) console.log('There was an error connecting to database: ', err);
});

module.exports = con;
