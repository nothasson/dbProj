axios.defaults.baseURL = 'http://127.0.0.1:3000';
var draw = function(key){
    url = '/showChart?key=t' + key;
    axios.post(url)
    .then(function (res) {
        //console.log(res);
        var data = res.data;
        var titleData = [];
        var titleLabel = [];
        for (var i in data){
            for(var item in data[i]){
                if(isNaN(data[i][item])) titleLabel.push(data[i][item]);
                else titleData.push(data[i][item]);
            }
        }
    var chartData = {
        labels: titleLabel,
        datasets: [
            {
                data: titleData,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };
    idName = key + 'Canvas';
    var ctx = document.getElementById(idName).getContext("2d");
    var myBarChart = new Chart(ctx, {type: 'pie',data: chartData,});
    }).catch(function(thrown){
    });
};
var drawSalary = function(){
    axios.post('/showTeacour')
    .then(function(res){
        var data = res.data;
        var titleData = [0,0,0,0];
        var titleLabel = ['0-500','500-1000','1000-1500','2000以上'];
        for (var i in data){
            var salary = data[i].tcSalary;
            if(salary <= 500) titleData[0] = titleData[0]+1;
            else if(salary <= 1000) titleData[1] = titleData[1] + 1;
            else if(salary <= 1500) titleData[2] = titleData[2] + 1;
            else titleData[3] = titleData[3] + 1;
        }
        var chartData = {
            labels: titleLabel,
            datasets: [
                {
                    data: titleData,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
        var ctx = document.getElementById('salaryCanvas').getContext("2d");
        var myBarChart = new Chart(ctx, {type: 'pie',data: chartData,});
    }).catch(function(thrown){

    });
};
drawSalary();
draw('title');
draw('school');
draw('education');

