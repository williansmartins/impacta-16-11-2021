var conector = require("mysql");

var conexao = conector.createConnection({
    host: "194.195.222.201",
    user: "impacta",
    password: "123456",
    database: "impacta2"
});

conexao.connect(callback);

function callback(erro){
    if(erro){
        console.error("Erro ao tentar se conextar");
        console.error(erro);
    }else{
        console.info("Sucesso ao conectar!");

        var sql = "DELETE FROM QUIZ_PESSOA WHERE id = 7";
        conexao.query(sql, function (erro, resultado) {
            if (erro) { 
                console.error(erro);
            }else{
                console.log(resultado);
            }
        });
    }
}