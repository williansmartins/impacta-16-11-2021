module.exports = function(app){
    var router = require("express").Router();

    const pessoa = require("../controllers/pessoa.controller.js");

    //get = buscar
    router.get("/", pessoa.getAll);

    //post = criar
    router.post("/", pessoa.create);

    //put = atualizar
    router.put("/:id", pessoa.update);

    //delete = remover
    router.delete("/:id", pessoa.delete);

    app.use('/api/pessoa', router);
}