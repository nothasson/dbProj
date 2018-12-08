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
draw('title');
draw('school');
draw('education');
