import { db } from '../db.js';
import mysql from 'mysql'

export const getUsers = (req, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    else {
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

export const userPersist = ('/cadastro', (req, res) => {
  const username = req.body.username;
  const password = req.body.senha;
  const passwordrep = req.body.senharep;

  // Consulta SQL para verificar se o usuário já existe
  const checarUsuario = `SELECT * FROM remi.users WHERE username = '${username}'`;

  db.query(checarUsuario, (err, usuarioExistente) => {
    if (err) {
      return res.status(500).json({ message: "Erro interno do servidor" });
    } else {
      // Se o usuário já existe, retorne um erro
      if (usuarioExistente.length > 0) {
        return res.status(400).json({ message: "Sinto muito, este nome de usuário ja foi escolhido!" });
      } else {
        // Se o usuário não existe, insira-o no banco de dados
        const persistirUsuario = `INSERT INTO remi.users (username, senha, titulo, receitas, favoritas, foto) VALUES ('${username}', '${password}', 'Amador', '[]', '[]', '1')`;

        db.query(persistirUsuario, (err, data) => {
          if (err) {
            return res.status(500).json({ message: "Erro interno do servidor" });
          } else {
            return res.status(200).json({ message: "Usuário criado!" })
          }
        });
      }
    }
  });
});


export const getAutor = ('/autor-receita', (req, res) => {
  const idAutor = req.body.autor;
  
  const q = `SELECT * FROM users WHERE id = '${idAutor}'`;

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Erro interno do servidor" });
    } else {
      const userFound = data.find(user => user.id === idAutor);

      if (userFound) {
        return res.json(userFound); // Retorna os detalhes do usuário encontrado
      } else {
        return res.status(401).json({ message: "Usuário não encontrado" });
      }
    }
  });
});

export const editUser = ('/alterar-dados-de-usuario', (req, res) => {
  const id = req.body.id;
  const username = req.body.username;
  const foto = req.body.foto;
  const titulo = req.body.titulo;

  const q = "UPDATE remi.users SET username = ?, titulo = ?, foto = ? WHERE id = ?";
  const values = [username, titulo, foto, id];
  

  db.query(q, values, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Erro interno do servidor" });
    } else {
      return res.status(200).json({ message: "Usuário editado!" });
    }
  });
});
