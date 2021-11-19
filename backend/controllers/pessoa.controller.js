const Pessoa = require("../models/pessoa.model.js");

// Buscar todas as Pessoas.
exports.getAll = (req, res) => {
    const nome = req.query.nome;
  
    Pessoa.getAll(nome, (err, data) => {
        if (err){
            res.status(500).send({
            message:
                err.message || "Algum erro ocorreu ao buscar dados."
            });
        }else {
            res.send(data);
        }
    });
};