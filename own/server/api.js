var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

var conn = mysql.createConnection(models.mysql)
conn.connect()
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
      res.json({
        code: '1',
        msg: '操作失败'
      })
    } else {
      res.json(ret)
    }
  }

router.post('checkPw',(req,res) => {
    var sql = $sql.tbUser.search
})