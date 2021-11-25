var fs = require("fs");


// Asynchronous read
fs.readFile('arquivo.txt', function (erro, conteudo) {
  if (erro) {
      console.error("Ocorreu um erro ao ler o arquivo.");
      return console.error(erro);
  }
  console.log(conteudo.toString());
});
