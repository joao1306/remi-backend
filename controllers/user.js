import { db } from '../db.js';

export const getUsers = (req, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err){
            return res.json(err);
        }
        else{
            return res.status(200).json(data);
        }
    })
}

export const authUser = ('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.senha;
  
    const q = `SELECT * FROM users WHERE username = '${username}' AND senha = '${password}'`;
  
    db.query(q, (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Erro interno do servidor" });
      } else {
        const userFound = data.find(user => user.username === username && user.senha === password);
              
        if (userFound) {
          return res.json(userFound); // Retorna os detalhes do usuário autenticado
        } else {
          return res.status(401).json({ message: "Usuário não encontrado ou senha incorreta" });
        }
      }
    });
  });