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
    var nameText = document.getElementById('getName').value;
    var courseText = document.getElementById('getCourse').value;
    var schoolText = document.getElementById('getSchool').value;
    

};
showSearchTable();