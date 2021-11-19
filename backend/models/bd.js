const mysql = require("mysql");

var connection = mysql.createPool({
    host: "194.195.222.201",
    user: "impacta",
    password: "123456",
    database: "impacta2"
});

module.exports = connection;