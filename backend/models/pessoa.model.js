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

module.exports = Pessoa;