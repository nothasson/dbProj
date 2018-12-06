var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var conn;
var app = express();
//app.use('/own',express.static(__dirname + '/public'));
app.listen(3000);
console.log('success listen at port:3000......')
function handleError () {
    conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123123',
        database: 'teacher',
        port: 3306
    });

    //连接错误，2秒重试
    conn.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleError , 2000);
        }else {
            console.log("nice");
        }
    });

    conn.on('error', function (err) {
        console.log('db error', err);
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleError();
        } else {
            throw err;
        }
    });
}

var sqlMap ={
    tbUser:{
        search:'SELECT * FROM tbUser where username = ?',
        update:'update tbUser set password = ? WHERE username = ?',
    },
    tbPower:{
        updateT:'update tbPower set powerT = ? WHERE username = ? ',
        updateC:'update tbPower set powerC = ? WHERE username = ? ',
        updateTC:'update tbPower set powerTC = ? WHERE username = ? ',
        updateST:'update tbPower set powerST = ? WHERE username = ? ',
        updateSC:'update tbPower set powerST = ? WHERE username = ? ',
        delete:'delete from tbPower where username = ?',
    },
    tbTeacher:{
        update:'update tbTeacher set tName = ?,tEducation = ?,tTitle = ? ,tSchool=?,tTime = ? WHERE tNo = ?',
        delete:'delete from tbTeacher WHERE tNo = ?',
        add:'insert into tbTeacher(tNO,tName,tEducation,tTitle,tSchool,tTime) values(?,?,?,?,?,?)',
        searchBySomething:'select ? ,count(*) from tbTeacher group by ?',
        showAll:'select * from tbTeacher'
    },
    tbCourse:{
        update:'update tbCourse set cNo =?,cName=?',
        delete:'delete from tbCourse WHERE cNo = ?',
        add:'insert into tbCourse values(?,?)',
        search:'select * from tbCourse'
    },
    tbschooltea:{
        add:'insert into tbschooltea values(?,?)',
        update:'update tbschooltea set stName =?,tNo=?',
        delete:'delete from tbschooltea where stName =? and tNo = ?',
        search:'select * from tbschooltea where stName =? or tNo = ?'
    }
};
handleError();
app.all('*', function(req, res, next) {
    //允许的来源
    res.header("Access-Control-Allow-Origin", "*");
    //允许的头部信息，如果自定义请求头，需要添加以下信息，允许列表可以根据需求添加
    res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    //允许的请求类型
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("author","hasson");
    next();
});
//user表相关接口
app.post('/checkPw',function(req,res){
    var query = req.query || {};
    var data =  JSON.parse(JSON.stringify(query));
    values = [];
    for (var k in data){
        values.push(data[k]);
    }
    conn.query(sqlMap.tbUser.search,values, function (err,result) {
        if(err){
            console.log(err);
        }else{
            //console.log(data);  //打印数据
            res.end(JSON.stringify(result));  
        }
    });
});
app.post('/changePw',function(req,res){
    var query = req.query || {};
    var data =  JSON.parse(JSON.stringify(query));
    values = [];
    for (var k in data){
        values.push(data[k]);
    }
    conn.query(sqlMap.tbUser.update,values,function(err,data){
        if(err){
            console.log(err);
        }else{
            //console.log(data);  //打印数据
            res.end(JSON.stringify(query));  
        }
    });
});


//teacher表相关接口
app.post('/updateTeacher',function(req,res){

    var query = req.query || {};
    var data =  JSON.parse(JSON.stringify(query));
    var values = [];
    for (var k in data){
        values.push(data[k]);
    }
    console.log(values);
    conn.query(sqlMap.tbTeacher.update,values,function(err,data){
        if(err){
            console.log(err);
        }else{
            //console.log(data);  //打印数据
            res.end(JSON.stringify(query));  
        }
    });
});
app.post('/deleteTeacher',function (req,res) {
    var query = req.query || {};
    var data =  JSON.parse(JSON.stringify(query));
    var values = [];
    for (var k in data){
        values.push(data[k]);
    }
    console.log(values);
    conn.query(sqlMap.tbTeacher.delete,values,function(err,result){
        if(err){
            console.log(err);
        }else{
            //console.log(data);  //打印数据
            res.end(JSON.stringify(result));  
        }
    });
});
app.post('/searchBySomething',function(req,res){
    var query = req.query || {};
    var data =  JSON.parse(JSON.stringify(query));
    sqlSen = 'select "' + data['type'] + '",count(*) from tbTeacher group by "' + data['type'] + '"';
    conn.query(sqlSen,function(err,data){
        if(err){
            console.log(err);
        }else{
            //console.log(data);  //打印数据
            res.end(JSON.stringify(data));  
        }
    });
});
app.post('/showAllTeacher',function(req,res){
    var query = req.query || {};
    var query = req.originalUrl;//获取请求url
    conn.query(sqlMap.tbTeacher.showAll,function(err,data){
        if(err){
            console.log(err);
        }else{
            //console.log(data);  //打印数据
            res.end(JSON.stringify(data));  
        }
    });
});
app.post('/addTeacher',function(req,res){
    var query = req.query || {};
    var data =  JSON.parse(JSON.stringify(query));
    var values = [];
    for (var k in data){
        values.push(data[k]);
    }
    console.log(values);
    conn.query(sqlMap.tbTeacher.add,values,function(err,data){
        if(err){
            console.log(err);
        }else{
            //console.log(data);  //打印数据
            res.end(JSON.stringify(query));  
        }
    });
    //console.log(query);
});
app.post('/searchBySomeValue' ,function(req,res){
    var query = req.query || {};
    var data =  JSON.parse(JSON.stringify(query));
    sqlSen = 
    conn.query(sqlSen,function(err,data){
        if(err){
            console.log(err);
        }else{
            //console.log(data);  //打印数据
            res.end(JSON.stringify(data));  
        }
    });
});



