import mysql from 'mysql';


export const db = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
<<<<<<< HEAD
    user: 'ndq3w5k42t4us3gua8qo',
    password: 'pscale_pw_zHfAaBlV0QY7ybcIL1MHHYAm1vHtV8ewVEsrO3SZ4Pn',
=======
    user: 'u0mhm4yduhdipveil2ob',
    password: 'pscale_pw_74jk2BKFIJCty3YKAZLy5Z9WByfjgC3mo2R72tVxPtz',
>>>>>>> ae05b3710d958db85a663f893b9fffb6f855a6aa
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
