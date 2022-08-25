const express = require('express');
const template = require('./lib/template.js');
const db =  require('./lib/db');
const auth = require('./lib/auth.js');
const { request } = require('express');
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const bodyparser = require('body-parser');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var fBRouter = require('./routes/freeBoard');
var sessionMySQL = require('./lib/session');
var path = require('path');

const app = express();
const port = 8080;



app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'css'))); 
app.use(bodyparser.urlencoded({extended: false}));






app.use(session(sessionMySQL));
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/freeboard', fBRouter);





app.use(function(req, res, next){
    res.status(404).send('Sorry cant find that');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});