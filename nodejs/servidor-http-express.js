var express = require('express');

var app = express();

app.get('/pergunta', function(requisicao, resposta){
   resposta.send("<h1>Hello World com EXPRESS - PERGUNTA</h1>");
})

app.get('/assunto', function(requisicao, resposta){
   resposta.send("<h1>Hello World com EXPRESS - ASSUNTO</h1>");
})

app.listen(3000, function(){
   console.info("Servidor Iniciado!");
})