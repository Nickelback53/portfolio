const auth = require('../lib/auth.js');
var express = require('express');
var router = express.Router();
var template = require('../lib/template');
const db =  require('../lib/db');
var path = require('path');

router.get('/', function(req, res){
    console.log(req.params);
    db.query(`select * from topic`, function(error, topics){
        var title = '-이태호-<p></p>웹개발자 포트폴리오';
        var description = '';

        var homeTag = template.homeTag();
        //var list = template.list(topics);
        var html = template.HTMLHome(title, '',
             `<div class="name text-center">
                <h2>${title}</h2>
              </div>
              <div class="text-center">
                ${description}
              </div>
             ` ,
        ``, auth.authStatusUI(req, res) , homeTag );
    
        res.send(html);
    });
});

//<img  src="images/hello.jpeg" class="img-fluid" alt="Responsive image"></img>

module.exports = router;