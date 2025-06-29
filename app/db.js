const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'test_db'
});

module.exports = pool;