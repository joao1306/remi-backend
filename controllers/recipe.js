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

export const getMyRecipes = (req, res) => {
    const id = req.query.userId;
    const categoria = req.query.categoria;

    if(categoria==='all'){
        const q = `SELECT * FROM receita WHERE idusuario = ${id}`;

        db.query(q, (err, data) => {
            if (err) {
                return res.json(err);
            }
            else {
                return res.status(200).json(data);
            }
        })
    } else {
        const q = `SELECT * FROM receita WHERE idusuario = ${id} AND categoria = '${categoria}'`;

        db.query(q, (err, data) => {
            if (err) {
                return res.json(err);
            }
            else {
                return res.status(200).json(data);
            }
        })
    }
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

export const getById = (req, res) => {

    const idReceita = req.body.idDaReceita;

    const q = `SELECT * FROM receita WHERE idreceitas = ${idReceita}`;

    db.query(q, (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Erro interno do servidor" });
        } else {
            return res.status(200).json(data)
        }
    });

};

export const putNota = (req, res) => {
    const idReceita = req.body.idDaReceita;
    const novaNota = req.body.nota;
    console.log(idReceita)
    console.log(novaNota)


    // Recupere a array de notas atual do banco de dados
    const qSelect = "SELECT notas FROM receita WHERE idreceitas = ?";
    db.query(qSelect, [idReceita], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Erro interno do servidor" });
        } else {
            if (!result || result.length === 0 || !result[0].notas) {
                return res.status(404).json({ message: "Receita não encontrada" });
            }

            const notasAtuais = JSON.parse(result[0].notas);
            // Adicione a nova nota à array existente
            notasAtuais.push(novaNota);

            // Converta a array atualizada de volta para uma string JSON
            const notasAtualizadas = JSON.stringify(notasAtuais);
            // Atualize a coluna 'notas' no banco de dados com a array atualizada
            const qUpdate = "UPDATE receita SET notas = ? WHERE idreceitas = ?";
            db.query(qUpdate, [notasAtualizadas, idReceita], (err, data) => {
                if (err) {
                    return res.status(500).json({ message: "Erro interno do servidor" });
                } else {
                    return res.status(200).json({ message: "Receita avaliada!" });
                }
            });
        }
    });
};
