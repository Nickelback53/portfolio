var express = require('express');
var router = express.Router();
var template = require('../lib/template');
const db =  require('../lib/db');
const auth = require('../lib/auth');
var sanitizeHtml = require('sanitize-html');
var url = require('url');
var path = require('path');
const session = require('express-session');


router.get( '/', function(request, response){
    db.query(`select * from freeboard `, function(error, freeboard){

        var title = '공지사항';
        var fBList = template.fBList(freeboard);
        var html = template.HTML(title, '', 
            `` , fBList ,auth.authStatusUI(request, response) );
    
        response.writeHead(200);
        response.end(html);

        
    });
});

router.get( '/page/:pageId', function(request, response){
    var filteredId = path.parse(request.params.pageId).base;


    db.query(`select * from freeboard `, function(error, freeboard){
        if(error){
            throw error;
        }
        db.query(`select * from freeboard where id= ?`,[filteredId], function(error2, free){
            if(error2){
                throw error2;
            }
            var title = '게시판';
            var fbTitle = free[0].title;
            var description = free[0].description;
            var name = free[0].username;
            var time = free[0].created.toISOString().replace(/T/, ' ').replace(/\..+/, '');
            var fBList = template.fBList(freeboard);
            var html = template.HTML(title, `<div class="DetailContainer">
                                                <div class="DetailTitleContainer">
                                                    ${fbTitle}
                                                </div>
                                                <div class="DetailName">
                                                    <p>${name}</p>
                                                    <p>작성일: ${time}</p>
                                                </div>                                                
                                                <div class="DetailDescription">
                                                    ${description}
                                                </div>
                                            </div>
                                            <div class="text-sm-end m-2">
                                                <a href="/freeboard" class="btn btn-success">목록</a>
                                                <form action="/freeboard/update" method="post" style="display:inline; ">
                                                    <input type="hidden" name="id" value="${free[0].id}">
                                                    <input type="submit" class="btn btn-success" value="수정">
                                                </form>
                                                <form action="/freeboard/delete_process" method="post" style="display:inline; ">
                                                    <input type="hidden" name="id" value="${free[0].id}">
                                                    <input type="submit" class="btn btn-secondary" value="삭제">
                                                </form>
                                            </div>    
                                            <br></br>`, 
            `` , fBList ,auth.authStatusUI(request, response) );
        
            response.send(html);
        });
    });
        

});

router.get( '/create',function(request, response){
    if(request.session.loggedin){
        var title = 'Create'; 
        //var list = template.list(topics);
        var html = template.HTML(sanitizeHtml(title), '',
            `<div class="bg-white border rounded-5  >
                <section class="w-200 p-6 d-flex justify-content-center pb-4">
                    <p></p>
                    <form action="/freeboard/create_process" method="post" class="container-md"">
                        <p><input type="text" name="title" placeholder="제목" ></p>
                        <p>
                        <textarea class="form-control" name="description" placeholder="내용" rows="6"></textarea>
                        </p>
                        <p>
                        <input type="submit">
                        </p>
                    </form>
                </section>    
            </div>` ,
            ``, auth.authStatusUI(request, response));
        response.writeHead(200);
        response.end(html);
    }else{
        response.send(`<script type="text/javascript">alert("글쓰기는 로그인하셔야 가능합니다."); document.location.href="/auth/login"; </script> `);
    }

});

router.post('/create_process',  function(request, response){
    
    var post = request.body;

        
        db.query(`insert into freeboard (title, description,created, username)
        values(? , ?, now(),?)`, [post.title, post.description, request.session.username],
        function(error, result){
            if(error){
                throw error; 
            }
            response.writeHead(302, {Location: `/freeboard`} );    
            response.end(); 
        })

});

router.post( '/update',function(request, response){
    var post = request.body;
    
    db.query(`select * from freeboard where id= ?`,[post.id], function(error, free){
        if(error){
            throw error;
        }
        if(request.session.loggedin&&free[0].username==request.session.username){
            var title = 'Create'; 
            //var list = template.list(topics);
            var html = template.HTML(sanitizeHtml(title), '',
                `<div class="bg-white border rounded-5  >
                    <section class="w-200 p-6 d-flex justify-content-center pb-4">
                        <p></p>
                        <form action="/freeboard/create_process" method="post" class="container-md"">
                            <p><input type="text" name="title" placeholder="제목" value="${sanitizeHtml(free[0].title)}"></p>
                            <p>
                            <textarea class="form-control" name="description" placeholder="내용" rows="6">${sanitizeHtml(free[0].description)}</textarea>
                            </p>
                            <p>
                            <input type="submit">
                            </p>
                        </form>
                    </section>    
                </div>` ,
                ``, auth.authStatusUI(request, response));
            response.writeHead(200);
            response.end(html);
        }else{
            response.send(`<script type="text/javascript">alert("글수정은 본인만 가능합니다."); document.location.href="/freeboard/page/${free[0].id}"; </script> `);
        }
    });
});



router.post('/update_process',  function(request, response){
    
    var post = request.body;
        
    db.query(`update freeboard set name = ?, profile = ? where id = ?`,
        [post.name , post.profile, post.id],
        function(error, result ){
            if(error){
                throw error;
            }
            response.writeHead(302, {Location : `/author`});
            response.end();

    })
});

router.post('/delete_process',  function(request, response){
    
    var post = request.body;
    db.query(`select * from freeboard where id= ?`,[post.id], function(error, free){
        if(error){
            throw error;
        }
        if(request.session.loggedin&&free[0].username==request.session.username){

        
            db.query(`delete from freeboard where id = ?`, [post.id], function(error2, result){
                
                    if(error2 ){
                        throw error2;
                    }


                    response.writeHead(302, {Location : `/freeboard`});
                    response.end();               

            })
        }else{
            response.send(`<script type="text/javascript">alert("글삭제는 본인만 가능합니다."); document.location.href="/freeboard/page/${free[0].id}"; </script> `);
        }    
    });
});



module.exports = router;