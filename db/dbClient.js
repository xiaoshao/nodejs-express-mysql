var Client = require("mysql");
var conn = Client.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "nodejsapp"
});

function execute(sql, callback){
    conn.query(sql, function(error, res, fields){
        callback(error, res, fields);
        conn.end();
    });
}

module.exports = {"execute" : execute};