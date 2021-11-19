module.exports = app => {
    const pessoa = require("../controllers/pessoa.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", pessoa.create);
  
    // Retrieve all Tutorials
    router.get("/", pessoa.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", pessoa.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", pessoa.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", pessoa.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", pessoa.delete);
  
    // Delete all Tutorials
    router.delete("/", pessoa.deleteAll);
  
    app.use('/api/pessoa', router);
  };