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
var showTeacherTable = function(){  //展示教师信息
    var table = document.getElementById("sampleTable");
    var tbody = table.tBodies[0];
    var myData;
    axios.post('/showAllTeacher') //获得教师信息~
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
            button.setAttribute("onclick","modifyTeacher()");
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
            button.setAttribute("onclick","deleteTeacher(" + i + ")");
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

var showUserInfoInPage = function(){    //展示用户表
    showTeacherTable();
    myData = getUserInfo();
    console.log(myData);
    document.getElementById('username').innerHTML = myData[0];
    type = ['普通用户','系统管理员'];
    document.getElementById('userType').innerHTML = type[myData[1]];
};

var deleteTeacher = function(r){
    document.getElementById('sampleTable').deleteRow(r+1);
};

var addTeacher = function(){
    var url='addTeacher.html';                             //转向网页的地址; 
    var name='add';                            //网页名称，可为空; 
    var iWidth=518;                          //弹出窗口的宽度; 
    var iHeight=566;                         //弹出窗口的高度; 
    //获得窗口的垂直位置 
    var iTop = (window.screen.availHeight - 20 - iHeight) / 2; 
    //获得窗口的水平位置 
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; 
   // window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no'); 
    window.open("addTeacher.html", "newWindows", 
    'height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
};
showUserInfoInPage();