import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();


export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida');
  }
});
