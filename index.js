const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

const dbName = 'teste2'
conn.query(
  `CREATE DATABASE IF NOT EXISTS ${dbName};`,
  (err, _result) => {
    if (err) throw err;
    console.log("Banco criado");
  }
);

conn.query(
  'SHOW DATABASES;',
  (err, result) => {
    if (err) throw err;
    console.log(result)
  }
);

conn.end(() => {
  console.log('MySQL desconectado')
});