import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  // configuração de acesso
  host: 'mysqldb',
  database: 'plants',
  user: 'root',
  password: 'd0ntpwnpl3ase',
  port: 3306,

  // configuração das conexões
  multipleStatements: true,

  // configuração da pool
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
