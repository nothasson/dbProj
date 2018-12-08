axios.defaults.baseURL = 'http://127.0.0.1:3000';
var showSearchTable = function(){
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
            tbody.append(tr);
}
    });
};

var searchBySomethingButton = document.getElementById('searchBySomething');
searchBySomethingButton.onclick = function(){
    rowLength = document.getElementById('sampleTable').rows.length;
    for(var i =1;i<rowLength;i++)
    {
        document.getElementById('sampleTable').deleteRow(1);
    }
    
    var table = document.getElementById("sampleTable");
    var tbody = table.tBodies[0];
    var myData;
    var nameText = document.getElementById('getName').value;
    var titleText = document.getElementById('getTitle').value;
    var schoolText = document.getElementById('getSchool').value;
    url = '/searchBySomeValue?tName='+ nameText+'&tTitle='+titleText+'&tSchool=' + schoolText;
    axios.post(url)
    .then(function (response) {
        data = response.data;
        myData = data;
        for(var i in data){
            var tr = document.createElement("tr");
            for (var j in data[i]){
                var td = document.createElement("td");
                td.innerHTML = data[i][j];
                tr.append(td);
            }
            tbody.append(tr);
    }
})
    .catch(function (error) {
        console.log(error);
    });
};

showSearchTable();