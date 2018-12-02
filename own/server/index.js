/**
 * Created by 黄森 on 2017/6/14.
 */
var express = require('express');

var app = express();
//get请求
app.post('/student',function (req,res) {
    console.log(req.query);
    res.send();
});
app.listen(3000);
