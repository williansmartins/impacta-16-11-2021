const express = require("express"); //FRAMEWORK MVC
const app = express();

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// configurando porta e ouvindo requisicoes
const PORTA = 8080;
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}.`);
});