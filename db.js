import mysql from 'mysql';


export const db = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'exy4j8xwqydxm5rrerxj',
    password: 'pscale_pw_RVPT1h6wUB2CK5QHOO5zcwr3oCT6FjEYLSmCEQEofz',
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
    }
  });