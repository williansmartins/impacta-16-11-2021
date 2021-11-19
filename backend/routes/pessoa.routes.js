module.exports = function(app){
    var router = require("express").Router();

    const pessoa = require("../controllers/pessoa.controller.js");

    //get = buscar
    router.get("/", pessoa.getAll);

    //post = criar

    //put = atualizar

    //delete = remover

    app.use('/api/pessoa', router);
}