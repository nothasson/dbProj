var modifyPw = function()
{
    var username = document.getElementById('userName').value;
    var before = document.getElementById('beforePw').value;
    var 
}
var loginClick = function()
{
    
    var username = document.getElementById('loginUsername').value;
    console.log(username);
    var password = hex_md5(document.getElementById('loginPassword').value);
    console.log(password);
    axios.defaults.baseURL = 'http://127.0.0.1:3000';
    axios.post('/checkPw')
    .then(function(response) {
      data =response.data;
      if (username == data[0]['username'] && password == data[0]['password']){
          window.location.href = 'index.html' + '?username='+data[0]['username']+'&type='+data[0]['type'];
      }
      else{
          alert("密码错误！！");
      }
    });
};

//获取从注册界面传来的信息
var getUserInfo = function(){
    var url = window.location.href;
    var usernameEq = url.substring(url.search("username"),url.search("&"));
    var username = usernameEq.substring(usernameEq.search("=")+ 1);
    var typeEq = url.substring(url.search("type"));
    var type = typeEq.substring(typeEq.search("=") + 1);
    return [username,type];
}

var showUserInfoInPage = function(){
    myData = getUserInfo();
    console.log(myData);
    document.getElementById('username').innerHTML = myData[0];
    type = ['普通用户','系统管理员'];
    document.getElementById('userType').innerHTML = type[myData[1]];
};


showUserInfoInPage();