const express = require('express');
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var db_config = require('../config/db-config.json');


var options = {
    host: db_config.host,
    port: db_config.port,
    user: db_config.user, 
    password: db_config.password,
    database: db_config.database
};


var sessionStore = new MySQLStore(options);

var sessionMySQL = {  // 2
    secret: 'keyboard cat',  // 암호화
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}



module.exports = sessionMySQL;