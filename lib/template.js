var sanitizeHtml = require('sanitize-html');

module.exports = {
    HTML : function (title, list, body, control, authStatusUI = '<a href="/auth/login" class="btn btn-secondary fs-4">Login</a>', hometag = '<a href="/freeboard">공지사항</a>'){
        return `
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">    
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="/style.css">
        </head>
        <body class="container">           
            <div class="row"> 
                <div class="col-sm-6 col-xs-12 text-sm-start text-center fs-1">
                    <a href="/">Home</a>
                </div>
                <div class="col-sm-6 col-xs-12 text-sm-end text-center fs-4">
                  ${hometag}
                    <p>
                        <div>
                            ${authStatusUI}
                        </div>
                    </p>
                </div>
            </div>                             
            <br></br>
            ${list}
            ${control}
            ${body}

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </body>
        </html>   
        `;
    },HTMLHome : function (title, list, body, control, authStatusUI = '<a href="/auth/login" class="btn btn-secondary fs-4">Login</a>', hometag = ''){
        return `
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">    
            <title>WEB1 - ${title}</title>
            <link rel="stylesheet" href="style.css">
            <meta charset="utf-8">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Sunflower&display=swap" rel="stylesheet">
        </head>
        <body >
            <div class="HomeContainer" >
                <div>               
                    <div class="row"> 
                        <div class="col-sm-6 col-xs-12 text-sm-start  fs-1 ">
                            <a href="/">Home</a>
                        </div>
                        <div class="col-sm-6 col-xs-12 text-sm-end fs-4">

                            ${hometag}
                            <p>
                                <div>
                                    ${authStatusUI}
                                </div>
                            </p>
                        </div>

                        
                    </div>                             
                </div>
                <br></br>

                ${list}
                ${control}
                ${body}
            </div>
            <div id="tag1" class="AboutContainer" >
                <div class="AboutTitleContainer text-center">
                    <img src="/images/information.png" >
                    <div>
                        <p class="AboutTitle">ABOUT</p>
                    </div>
                </div>
                <div class="AboutContentContainer">
                    <div class="AboutContentWrapper">
                        <div class="AboutContent p-3">
                            <img src="/images/name.png" alt="이름">
                            <div class="AboutContentPContainer">
                                <p class="AboutContentP1  fs-4">이름</p>
                                <p class="AboutContentP2  fs-6">이태호</p>
                            </div>
                        </div>
                    </div>
                    <div class="AboutContentWrapper">
                        <div class="AboutContent p-3">
                            <img src="/images/birthday.png" alt="생년월일">
                            <div class="AboutContentPContainer">
                                <p class="AboutContentP1  fs-4">생년월일</p>
                                <p class="AboutContentP2  fs-6">87.05.23</p>
                            </div>
                        </div>
                    </div>
                    <div class="AboutContentWrapper">
                        <div class="AboutContent p-3">
                            <img src="/images/location.png" alt="주소">
                            <div class="AboutContentPContainer">
                                <p class="AboutContentP1  fs-4">주소</p>
                                <p class="AboutContentP2  fs-6">서울시 양천구</p>
                            </div>
                        </div>
                    </div>
                    <div class="AboutContentWrapper">
                        <div class="AboutContent p-3">
                            <img src="/images/smartphone.png" alt="연락처">
                            <div class="AboutContentPContainer">
                                <p class="AboutContentP1  fs-4">연락처</p>
                                <p class="AboutContentP2  fs-6">010-8682-6398</p>
                            </div>
                        </div>
                    </div>
                    <div class="AboutContentWrapper">
                        <div class="AboutContent p-3">
                            <img src="/images/email.png" alt="이메일">
                            <div class="AboutContentPContainer">
                                <p class="AboutContentP1  fs-4">이메일</p>
                                <p class="AboutContentP2  fs-6">taeho0523@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="AboutContentWrapper">
                        <div class="AboutContent p-3">
                            <img src="/images/college.png" alt="학력">
                            <div class="AboutContentPContainer">
                                <p class="AboutContentP1  fs-4">학력</p>
                                <p class="AboutContentP2  fs-6">숭실대학교 (물리학과)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tag2" class="EmploymentContainer" >
                <div class="EmploymentTitleContainer">
                    <img src="/images/Employment.png" >
                    <div class="EmploymentTitle">
                        <p>Employment</p>
                    </div>
                </div>
                <div class="EmploymentContentContainer">
                    <ul>
                        <p>2020-2022</p>
                    </ul>
                    <ul>   
                        <div class="EmploymentContentTitle">
                            <ul>
                                <p>야인소프트</p>
                            </ul>
                        </div>
                        <div>    
                            <li>
                                <p>고려대학교 Datawarehouse 사업 참여</p>
                            </li>
                            <li>
                                <p>철도청 고장/수리 통계화 사업 참여</p>
                            </li>
                            <li>
                                <p>인사혁신처 BI모델 교체 사업 참여</p>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div id="tag3" class="SkillContainer" >
                <div class="SkillTitleContainer">
                    <img src="/images/skill.png" >
                    <div class="SkillTitle">
                        <p>Skills</p>
                    </div>
                </div>
                <div class="SkillContentContainer">
                    <div class="box-container">
                        <ul>
                            <p>Languages</p>
                        </ul>
                        <ul>
                            <li>
                                <img src="/images/python.svg">
                            </li>
                            <li>
                                <img src="/images/java.svg">
                            </li>
                            <li>
                                <img src="/images/javascript.svg">
                            </li>
                            <li>
                                <img src="/images/c.svg">
                            </li>
                        </ul>
                    </div>
                    <div class="box-container">
                        <ul>
                            <p>WebDev</p>
                        </ul>
                        <ul>
                            <li>
                                <img src="/images/express.svg">
                            </li>
                            <li>
                                <img src="/images/node.svg">
                            </li>
                            <li>
                                <img src="/images/React.svg">
                            </li>
                            <li>
                                <img src="/images/SpringBoot.svg">
                            </li>
                        </ul>
                    </div>
                    <div class="box-container">
                        <ul>
                            <p>DataBase</p>
                        </ul>
                        <ul>
                            <li>
                                <img src="/images/oracle.svg">
                            </li>
                            <li>
                                <img src="/images/mysql.svg">
                            </li>
                            <li>
                                <img src="/images/mariadb.svg">
                            </li>
                        </ul>
                    </div>
                    <div class="box-container">
                        <ul>
                            <p>etc</p>
                        </ul>
                        <ul>
                            <li>
                                <img src="/images/github.svg">
                            </li>
                            <li>
                                <img src="/images/docker.svg">
                            </li>
                            <li>
                                <img src="/images/aws.svg">
                            </li>
                            <li>
                                <img src="/images/centos.svg">
                            </li>
                        </ul>
                    </div>
                </div>        
            </div>
            <div id="tag4" class="ProjectContainer" >
                <div class="ProjectTitleContainer">
                    <img src="/images/project.png" >
                    <div class="ProjectTitle">
                        <p>Project</p>
                    </div>
                </div>
                <div class="ProjectContentContainer">
                    <div class="ProjectContent">
                        <div class="ProjectContentTitle">
                            <p>재직당시 요청에 의해 짰던 쿼리</p>
                            <a>(부서를 고를시 부서의 다음 레벨까지 보여주고 그 부서들의 하위 레벨이 포함되게 하는 코드)</a>
                        </div>
                        <hr>
                        <div class="ProjectContentDescription text-center">
                            <p>select 부서레벨, 부서코드, 부서명, </p>
                            <p>
                            trim(regexp_substr(replace(sys_connect_by_path(부서코드,'|'), '|', '| '), '[^|]+', 1, 2, 'i')) as code,
                            </p>
                            <p>
                            trim(regexp_substr(replace(sys_connect_by_path(부서명,'|'), '|', '| '), '[^|]+', 1, 2, 'i')) as name,
                            </p>
                            <p>
                            sys_connect_by_path(부서코드, '|') "CODE_PATH",
                            sys_connect_by_path(부서명, '|') "NAME_PATH",
                            from 부서테이블
                            </p>
                            <p>
                            where  부서레벨> 2
                            start with 부서코드 = '부서레벨1인 부서코드'
                            and 부처코드(부서보다 더 상위개념 ) = '원하는 부처코드'
                            </p>
                            <p>
                            connect by prior 부서코드 = 상위부서코드
                            order siblings by 부서코드 
                            </p>
                        </div>
                    </div>
                    
                    <div class="ProjectContent">
                        <div class="ProjectContentTitle">
                            <p>포트폴리오</p>                            
                        </div>
                        <hr>
                        <div class="ProjectContentDescription text-center">
                            <div>
                                <img src="/images/portfolio.png">
                            </div>
                            <div>
                                <table class="table table-borderless">
                                    <tr>
                                        <th class="col-7">개발인원</th>
                                        <td style="float: left;">1명</td>
                                    </tr>
                                    <tr>
                                        <th>frontend</th>
                                        <td style="float: left;">HTML, css, javascript</td>
                                    </tr>
                                    <tr>
                                        <th>backend</th>
                                        <td style="float: left;">Node.js</td>
                                    </tr>
                                    <tr>
                                        <th>Github</th>
                                        <td style="float: left;">
                                            <a href="https://github.com/Nickelback53/portfolio" target='_blank'>GithubUrl </a>
                                        </td>
                                    </tr>


                                <table>
                            </div>
                        </div>                         
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </body>
        </html>   
        `;
    }, list : function (topics){
        var list = '<ul>';
        var i = 0;
        while(i < topics.length){ 
            list = list +  `<li><a href="/freeboard/page/?id=${topics[i].id}">${sanitizeHtml(topics[i].title)}</a></li>`;
            i= i+1;
        }               
        list = list + '</ul>';
        return list;
    }, authorSelect : function (authors, author_id ){
        var tag = '';
        var i = 0;
        while(i<authors.length){
            var selected = '';
            if(authors[i].id === author_id){
                selected = ' selected'
            }
            tag = tag + `<option value="${authors[i].id}"${selected}>${sanitizeHtml(authors[i].name)}</option>`;
            i++;
            console.log(tag);
        }
        return `<select name="author" class="form-select" aria-label="Default select example" style="width:auto;">
            ${tag}
            </select>`
    }, fBList : function (fB){
        var fBList = `<div class="ListContainer">
                    <div class="row">
                        <div class="col  fs-2">공지사항</div>
                        <button onclick="location.href='/freeboard/create'" class="col-1 btn btn-success text-center">글쓰기</button>
                      </div>
                      <br></br>
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col" class=" text-center">#</th>
                                <th scope="col" class="col-6 text-center">제목</th>
                                <th scope="col" class="text-center">필명</th>
                                <th scope="col" class="col-2 text-center">일시</th>
                            </tr>
                            </thead>
                            <tbody>`;
         
        var i = 0;
        while(i< fB.length){
            fBList = fBList + `<tr>
                                            <th scope="row" class="text-center">${fB[i].id}</th>
                                            <td><a href="/freeboard/page/${fB[i].id}">${sanitizeHtml(fB[i].title)}</a></td>
                                            <td>${sanitizeHtml(fB[i].username)}</td>
                                            <td type="date">${sanitizeHtml(fB[i].created.toISOString().replace(/T/, ' ').replace(/\..+/, ''))}</td>
                                            </tr>`
            i++;
        }
        fBList = fBList + '</tbody></table></div>'
        return fBList;
    }, homeTag : function(){
        var homeTag = `<ul class="nav justify-content-end fs-5 p3">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/freeboard">공지사항</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#tag1">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#tag2">Employment</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#tag3">Skill</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#tag4">Project</a>
            </li>
        </ul>`;
        
        
        /* `
            <a href="/freeboard">게시판</a>
            <a href="#tag1">About</a>
            <a href="#tag2">Skill</a>
            <a href="#tag3">Project</a>
            
        `*/
        
        return homeTag;
    }
    
    

}

