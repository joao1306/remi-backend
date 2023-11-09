import mysql from 'mysql';


export const db = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'gptt368i8j2k0hlil3cd',
    password: 'pscale_pw_PuuguSAQVdAUMaLGtT1urRzKbSsnZrxZUYw4v21WoWN',
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
