var express = require('express');
const session = require('express-session');
var router = express.Router();
var template = require('../lib/template');
const db =  require('../lib/db');

router.get('/login', function(req, res){
    var title = 'Login';

    var html = template.HTML(title,
        '',
    `
    <div class="bg-white border rounded-5 " >
        <section class="w-100 p-4 d-flex justify-content-center pb-4">
            <form action="/auth/login_process" method="post" >
                <div class="form-outline mb-4">
                    <label class="form-label">이메일</label>
                    <input type="email" name="email" placeholder="email" class="form-control" >
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label">비밀번호</label>
                    <input type="password" name="password" placeholder="password" class="form-control">
                </div>
                <div class="form-outline mb-4">
                    <input type="submit" value="Login" class="btn btn-primary btn-block mb-4">
                </div>
            <form>
        </section>    
    </div>`,
    '', '', '');

    res.send(html);
})

router.post('/login_process', function(req, res){
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;

    if(email && password){
        db.query(`select * from user where email = ? and password = ?`, [email, password], function(error, result, fields){
            if(error) throw error;
            if(result.length > 0 ){
                req.session.loggedin = true;
                req.session.username = result[0].username;
                req.session.save(function(){
                    res.redirect('/');
                })
            }else{
                res.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다"); document.location.href="/auth/login"; </script> `);
            }
        });
    }else{
        res.send(`<script type="text/javascript">alert("email과 password를 입력하세요!"); document.location.href="/auth/login"; </script> `);
        res.end();
    }


});

router.get('/logout_process' , function(req, res){
    req.session.loggedin =false;
    req.session.destroy(function(err){
        res.send(`<script type = "text/javascript">alert("성공적으로 로그아웃되었습니다."); document.location.href="/";</script>"`);
        res.end();
    });
    
});

module.exports = router;