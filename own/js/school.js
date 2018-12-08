axios.defaults.baseURL = 'http://127.0.0.1:3000';

var showTCTable = function(){  //展示教师上课
    var table = document.getElementById("sampleTable");
    var tbody = table.tBodies[0];
    var myData;
    axios.post('/showTeacour') //获得教师信息~
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
            button.setAttribute("onclick","modifyTeacour(" + i + ")");
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
            button.setAttribute("onclick","deleteTeacour(" + i + ")");
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
var deleteTeacour = function(r){
    var tNo =  document.getElementById('sampleTable').rows[r+1].cells[0].innerHTML.replace(/\s*/g,"");
    var cNo = document.getElementById('sampleTable').rows[r+1].cells[1].innerHTML.replace(/\s*/g,"");
    document.getElementById('sampleTable').deleteRow(r+1);
    url = '/deleteteacour?tNo='+tNo+'&cNo='+cNo;
    axios.post(url)
    .then(function (res) {
        console.log(res);
    }).catch(function (err) {
    console.log(err);
    });
};
var modifyTeacour = function(r){
    var row = document.getElementById('sampleTable').rows[r+1];
    console.log(row);
    var tNoText = row.cells[0].innerText.replace(/\s*/g,"");
    console.log(tNoText);
    var cNoText = row.cells[1].innerText.replace(/\s*/g,"");
    console.log(cNoText);
    var tcMoneyText = row.cells[2].innerText.replace(/\s*/g,"");
    console.log(tcMoneyText);
    var tcTimesText = row.cells[3].innerText.replace(/\s*/g,"");
    console.log(tcTimesText);
    var tcSalaryText = row.cells[4].innerText.replace(/\s*/g,"");
    document.getElementById('tcMoneyText').value = tcMoneyText;
    document.getElementById('tcTimesText').value = tcTimesText;
    document.getElementById('modifyConfirm').setAttribute("onclick","comfirmModify(" + tNoText+','+ cNoText + ")");
};
var modifyConfirmButton = document.getElementById('modifyConfirm');
var comfirmModify = function(tNoText,cNoText){
    var tcMoneyText = document.getElementById('tcMoneyText').value;
    var tcTimesText = document.getElementById('tcTimesText').value;
    var tcSalaryText = tcMoneyText * tcTimesText;
    var url = '/updateTeacour?tcMoney='+tcMoneyText+'&tcTimes='+tcTimesText+'&tcSalaryText='+tcSalaryText+'&tNo='+tNoText+'&cNo='+cNoText;
    console.log(url);
    axios.post(url)
        .then(function (response) {
        console.log("@@@"+ tNameText);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      location.reload();
      showTCTable();
};
showTCTable();
var addTeaCour = document.getElementById("addConfirm");
addTeaCour.onclick= function(){
    var tNo = document.getElementById("addtNoText").value;
    var cNo = document.getElementById("addcNoText").value;
    var tMoney = document.getElementById("addtMoneyText").value;
    var tTimes = document.getElementById("addtTimesText").value;
    var Salary = tMoney * tTimes;
    url = '/addTeacour?tNo='+tNo+'&cNo='+cNo+'&tcMoney='+tMoney+'&tcTimes='+tTimes+'&tcSalary='+Salary;
    console.log(url);
    axios.post(url)
    .then(function (res) {
        console.log(res);
    }).catch(function (err) {
    console.log(err);
    });
    location.reload();

};