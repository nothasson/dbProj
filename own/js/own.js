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
            //button.setAttribute("onclick","modifyTeacher()");
            button.setAttribute("data-toggle","modal");
            button.setAttribute("data-target","#modifyModal");
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
var addTeacherButton = document.getElementById("addConfirm");
addTeacherButton.onclick= function(){
    var tNo = document.getElementById("addtNoText").value;
    var tName = document.getElementById("addtNameText").value;
    var tSchool = document.getElementById("addtSchoolText").value;
    var tTiTle = document.getElementById("addtTitleText").value;
    var tEducation = document.getElementById("addtEducationText").value;
    var tTime = document.getElementById("addtTimeText").value;
    var data = [tNo,tName,tSchool,tTiTle,tEducation,tTiTle,tTime];
    axios.post('/addTeacher', {  //params参数必写 , 如果没有参数传{}也可以
    params: { 
       tNo: data[0],
       tName: data[1],
       tSchool:data[2],
       tTitle:data[3],
       tEducation:data[4],
       tTime:data[5]

    }.then(function (res) {
        console.log(res);
    }).catch(function (err) {
    console.log(err);
    }
)
});
};


showUserInfoInPage();