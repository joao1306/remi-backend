import mysql from 'mysql';


export const db = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'u0mhm4yduhdipveil2ob',
    password: 'pscale_pw_74jk2BKFIJCty3YKAZLy5Z9WByfjgC3mo2R72tVxPtz',
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
