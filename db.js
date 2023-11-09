import mysql from 'mysql';


export const db = mysql.createConnection({
database: 'remidb',
username: 'kknpw6qcv994x2r4s597',
host: 'aws.connect.psdb.cloud',
password: 'pscale_pw_OrYOgJY40uSQoy8r1p2VyNs4BUZQ5Klef5PuVgqd1Ub',
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
