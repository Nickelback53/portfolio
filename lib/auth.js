const express = require('express');
const session = require('express-session');



exports.authStatusUI =function (request, response){
    var authStatusUI = `<a href="/auth/login" class="btn btn-secondary fs-4">Login</a>`;
    

    if(request.session.loggedin){
        authStatusUI = `
            ${request.session.username} 님 환영합니다.
            <a href="/auth/logout_process" class="btn btn-secondary fs-4">logout</a>`;
    }
    return authStatusUI;
}