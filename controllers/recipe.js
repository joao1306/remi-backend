import { db } from '../db.js';

export const getRecipes = (req, res) => {
    const q = "SELECT * FROM receita";

    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            return res.status(200).json(data);
        }
    })
}

export const recipePersist = (req, res) => {
    const idusuario = req.body.idusuario;
    const nome = req.body.nome;
    const categoria = req.body.categoria;
    const descricao = req.body.descricao;
    const ingredientes = req.body.ingredientes;
    const passos = req.body.passos;
    const foto = req.body.foto;

    const persistirReceita = `INSERT INTO remi.receita (idusuario, nome, categoria, descricao, ingredientes, passos, foto, notas) VALUES ('${idusuario}', '${nome}', '${categoria}', '${descricao}', '${ingredientes}', '${passos}', '${foto}', '["5"]');`;

    db.query(persistirReceita, (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Erro interno do servidor" });
        } else {
            return res.status(200).json({ message: "Receita salva!" })
        }
    });

};