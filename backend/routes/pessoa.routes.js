module.exports = function(app){
    var router = require("express").Router();

    router.get("/", (req, res) => {
        res.json({ message: "nova rota usando express" });
    });

    app.use('/api/pessoa', router);
}