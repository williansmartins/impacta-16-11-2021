const sql = require("./bd.js");

// construtor
const Pessoa = function(parametro) {
  this.nome = parametro.nome;
  this.created_at = parametro.created_at;
};

Pessoa.create = (novo, result) => {
  sql.query("INSERT INTO QUIZ_PESSOA SET ?", novo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created pessoa: ", { id: res.insertId, ...novo });
    result(null, { id: res.insertId, ...novo });
  });
};

Pessoa.findById = (id, result) => {
  sql.query(`SELECT * FROM QUIZ_PESSOA WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found pessoa: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Pessoa with the id
    result({ kind: "not_found" }, null);
  });
};

Pessoa.getAll = (nome, result) => {
  let query = "SELECT * FROM QUIZ_PESSOA";

  if (nome) {
    query += ` WHERE nome LIKE '%${nome}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("QUIZ_PESSOA: ", res);
    result(null, res);
  });
};

Pessoa.getAllPublished = result => {
  sql.query("SELECT * FROM QUIZ_PESSOA WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("QUIZ_PESSOA: ", res);
    result(null, res);
  });
};

Pessoa.updateById = (id, pessoa, result) => {
  sql.query(
    "UPDATE QUIZ_PESSOA SET nome = ?, description = ?, published = ? WHERE id = ?",
    [pessoa.nome, pessoa.description, pessoa.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Pessoa with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated pessoa: ", { id: id, ...pessoa });
      result(null, { id: id, ...pessoa });
    }
  );
};

Pessoa.remove = (id, result) => {
  sql.query("DELETE FROM QUIZ_PESSOA WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Pessoa with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted pessoa with id: ", id);
    result(null, res);
  });
};

Pessoa.removeAll = result => {
  sql.query("DELETE FROM QUIZ_PESSOA", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} QUIZ_PESSOA`);
    result(null, res);
  });
};

module.exports = Pessoa;
