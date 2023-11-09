import mysql from 'mysql';


export const db = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 't108920rj5tq6wwf34fn',
    password: 'pscale_pw_q5qqM6pXdXE4dvQtEgrIt558g6wad7nRvAtisFcvE6d',
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
