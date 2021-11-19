module.exports = function(app){
    var router = require("express").Router();

    router.get("/", (req, res) => {
        res.json({ message: "nova rota usando express" });
    });

    router.get("/a", (req, res) => {
        res.json({ message: "A" });
    });

    router.get("/b", (req, res) => {
        res.json({ message: "B" });
    });

    app.use('/api/pessoa', router);
}

