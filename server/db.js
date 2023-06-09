const mysql = require('mysql')
// const error = require('error')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shameonme',
  database: 'aresa_apart'
})

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');
});

module.exports = connection;