var mysql = require('mysql');
var db_config = require('../config/db-config.json');

var db =  connection = mysql.createConnection({
    host : db_config.host,
    user : db_config.user,
    port : db_config.port,
    password : db_config.password,
    database : db_config.database
});
db.connect();

module.exports = db;