import mysql from 'mysql';


export const db = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'gp14w7kbuko3pyeh1sfg',
    password: 'pscale_pw_qV5DF1CJ7AEa2RY6KgXMYPXAm2lkHKMI8ZX4fPY4UxU',
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
