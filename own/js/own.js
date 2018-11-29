var mysql = require("mysql")
var crypto = require('crypto');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123123',
    port:'3306',
    database:'teacher'
})

connection.connect(function(err){
    if(err){
        console.log('[query]' + err);
        return;
    }
    console.log('[connection connect] succeed ! ');
})


pwd = cryptPwd(password,username)
function cryptPwd(password,username) {
    var md5 = crypto.createHash('md5');
    return md5.update(password + "from" + username).digest('hex');
}

var loginBtn = document.getElementById('submitInfo');
var username = document.getElementById('username');
var password = document.getElementById('password');
password = cryptPwd(password,username);

function loginClick(){
    

}

connection.end();