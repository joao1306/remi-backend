import mysql from 'mysql2';
require('dotenv').config()


//export const db = mysql.createConnection({
//    host: 'roundhouse.proxy.rlwy.net',
//    user: 'root',
//    password: '1Db-fFbhhBdC-3BGH1H36DhDHGab63CD',
//    database: 'remidb',
//    port: '13574'
//});

const mysqlps = require('mysql2')
const db = mysqlps.createConnection(process.env.DATABASE_URL)



db.connect((err) => {
    if (err) {
      console.error('Erro na conexão com o banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida');
    }
  });
