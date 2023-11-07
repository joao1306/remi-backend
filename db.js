import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'z0mb64bf7f7m66fns0xb',
    password: 'pscale_pw_n349u06iDGKosrAxC84hLr0Yi7zyBdVrnAVLQQbJ0OC',
    database: 'remidb',
    ssl: {
      rejectUnauthorized: true
    }
});

db.connect((err) => {
    if (err) {
      console.error('Erro na conexão com o banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida');
      // Faça suas operações no banco de dados aqui
    }
  });