axios.defaults.baseURL = 'http://127.0.0.1:3000';
var loginClick = function()  //检测账号密码并登陆
{
    
    var username = document.getElementById('loginUsername').value;
    console.log(username);
    var password = hex_md5(document.getElementById('loginPassword').value);
    console.log(password);
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
var showTeacherTable = function(){
    var table = document.getElementById("sampleTable");
    var tbody = table.tBodies[0];
    var myData;
    axios.post('/searchTeacher') //获得教师信息~
    .then(function(response){
        data = response.data;
        myData = data;
        for(var i in data){
            var tr = document.createElement("tr");
            for (var j in data[i]){
                var td = document.createElement("td");
                td.innerHTML = data[i][j];
                tr.append(td);
            }
            //添加两个按钮
            var td = document.createElement("td");
            div = document.createElement("div");
            div.setAttribute('class',"row");
            newDiv = document.createElement("div");
            newDiv.setAttribute("class","col-md-8");
            div.append(newDiv);
            button = document.createElement("button");
            button.classList.add("btn","btn-sm","btn-primary");
            button.setAttribute("type","button");
            text = document.createElement("i");
            text.classList.add("fa","fa-fw","fa-lg","fa-times-circle");
            button.innerHTML="修改";
            button.append(text);
            newDiv.append(button);
            div.append(newDiv);
            td.append(div);
            tr.append(td);
            td = document.createElement("td");
            div = document.createElement("div");
            div.setAttribute('class',"row");
            newDiv = document.createElement("div");
            newDiv.setAttribute("class","col-md-8");
            div.append(newDiv);
            button = document.createElement("button");
            button.classList.add("btn","btn-sm","btn-danger");
            button.setAttribute("type","button");
            text = document.createElement("i");
            text.classList.add("fa","fa-fw","fa-lg","fa-times-circle");
            button.innerHTML="删除";
            button.append(text);
            newDiv.append(button);
            div.append(newDiv);
            td.append(div);
            tr.append(td);
            tbody.append(tr);
        }      
    console.log(myData);

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
};

var showUserInfoInPage = function(){
    showTeacherTable();
    myData = getUserInfo();
    console.log(myData);
    document.getElementById('username').innerHTML = myData[0];
    type = ['普通用户','系统管理员'];
    document.getElementById('userType').innerHTML = type[myData[1]];
};


showUserInfoInPage();