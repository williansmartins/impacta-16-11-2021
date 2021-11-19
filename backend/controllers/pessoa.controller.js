const Pessoa = require("../models/pessoa.model.js");

// Criar e salvar
exports.create = (req, res) => {
  // Validar requisicao
  if (!req.body) {
    res.status(400).send({
      message: "Conteúdo não pode ser vazio!"
    });
  }

  // Criar a Pessoa
  const pessoa = new Pessoa({
    nome: req.body.nome,
    created_at: req.body.created_at,
  });

  // Salvar Pessoa in the database
  Pessoa.create(pessoa, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Um erro ocorreu ao salvar os dados."
      });
    else res.send(data);
  });
};

// Buscar todas as Pessoas.
exports.findAll = (req, res) => {
  const nome = req.query.nome;

  Pessoa.getAll(nome, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao buscar dados."
      });
    else res.send(data);
  });
};

// Find a single Pessoa by Id
exports.findOne = (req, res) => {
  Pessoa.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Pessoa with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Pessoa with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Pessoas
exports.findAllPublished = (req, res) => {
  Pessoa.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pessoas."
      });
    else res.send(data);
  });
};

// Update a Pessoa identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Pessoa.updateById(
    req.params.id,
    new Pessoa(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Pessoa with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Pessoa with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Pessoa with the specified id in the request
exports.delete = (req, res) => {
  Pessoa.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Pessoa with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Pessoa with id " + req.params.id
        });
      }
    } else res.send({ message: `Pessoa was deleted successfully!` });
  });
};

// Delete all Pessoas from the database.
exports.deleteAll = (req, res) => {
  Pessoa.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all pessoas."
      });
    else res.send({ message: `All Pessoas were deleted successfully!` });
  });
};