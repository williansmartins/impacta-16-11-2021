var express = require("express");

var app = express();

app.get("/batatinha", function(req, res){
    res.json({ message: "batatinha 123" });
});

app.listen(3000, function(){
    console.info("Servidor esta de pé!");
});