var osrsData = dailyData.OSRS.data.sort(function (a, b) {

    let aDate = new Date(a["_id"].year, a["_id"].month, a["_id"].day)
    let bDate = new Date(b["_id"].year, b["_id"].month, b["_id"].day)
    return aDate - bDate
}).slice(1).slice(-30)
var rs3Data = dailyData.RS3.data.sort(function (a, b) {
    let aDate = new Date(a["_id"].year, a["_id"].month, a["_id"].day)
    let bDate = new Date(b["_id"].year, b["_id"].month, b["_id"].day)
    return aDate - bDate
}).slice(1).slice(-30)


var dataStats = {
    average: [],
    maximum: [],
    minimum: [],
    labels: []
}
osrsDataStats = dataStats

for (let i = 0; i < osrsData.length; i++) {
    const tempObj = osrsData[i]
    const label = `${tempObj["_id"].year}/${tempObj["_id"].month}/${tempObj["_id"].day}`
    osrsDataStats.labels.push(label)
    osrsDataStats.average.push(tempObj["averagePrice"])
}

var ctxOSRS = "dailyAverageChartOSRS"
var osrsDataStatsChart = new Chart(ctxOSRS, {
    type: 'line',
    responsive: true,
    data: {
        labels: osrsDataStats.labels,
        datasets: [{
            label: 'Daily Average #',
            data: osrsDataStats.average,
            lineTension: 0,
            backgroundColor: "rgb(153, 102, 255)",
            borderColor: "rgb(153, 102, 255)",
            fill: false,
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }],
        },

    }
});

//There should be a WAYY better way to do this
dataStats.average = []
dataStats.labels = []
dataStats.maximum = []
dataStats.minimum = []
let rs3DataStats = dataStats

for (let i = 0; i < rs3Data.length; i++) {
    const tempObj = rs3Data[i]
    const label = `${tempObj["_id"].year}/${tempObj["_id"].month}/${tempObj["_id"].day}`
    rs3DataStats.labels.push(label)
    rs3DataStats.average.push(tempObj["averagePrice"])
}

var ctxRS3 = "dailyAverageChartRS3"
var rs3DataStatsChart = new Chart(ctxRS3, {
    type: 'line',
    responsive: true,
    data: {
        labels: rs3DataStats.labels,
        datasets: [{
            label: 'Daily Average #',
            data: rs3DataStats.average,
            lineTension: 0,
            backgroundColor: "rgb(153, 102, 255)",
            borderColor: "rgb(153, 102, 255)",
            fill: false,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

