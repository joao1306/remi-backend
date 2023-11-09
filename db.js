import mysql from 'mysql';


export const db = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'ndq3w5k42t4us3gua8qo',
    password: 'pscale_pw_zHfAaBlV0QY7ybcIL1MHHYAm1vHtV8ewVEsrO3SZ4Pn',
    database: 'remidb',
    ssl: {
      rejectUnauthorized: false
    }
});

db.connect((err) => {
    if (err) {
      console.error('Erro na conexão com o banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida');
    }
  });
