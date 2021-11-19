var sql = require("./bd");

const Pessoa = function(parametro) {
    this.nome = parametro.nome;
    this.created_at = parametro.created_at;
    this.deleted_at = parametro.deleted_at;
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

Pessoa.updateById = (id, pessoa, result) => {
  sql.query(
    "UPDATE QUIZ_PESSOA SET nome = ? WHERE id = ?",
    [pessoa.nome, id],
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

module.exports = Pessoa;