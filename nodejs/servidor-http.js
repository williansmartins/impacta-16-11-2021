var http = require('http');

var requisicao = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Olá Servidor!!</h1>");
    response.write("<h2>Bem vindo!!</h2>");
    response.end();
 }
 
 var server = http.createServer(requisicao);

 var resultado = function () {
    console.log('Servidor em funcionamento!');
 }

 server.listen(4000, resultado);

 