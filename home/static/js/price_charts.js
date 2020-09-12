var osrsData = dailyData.OSRS.data.sort(function (a, b) {
    return a['_id'].day - b['_id'].day || a['_id'].month - b['_id'].month || a['_id'].year - b['_id'].year
})
var rs3Data = dailyData.RS3.data.sort(function (a, b) {
    return a['_id'].day - b['_id'].day || a['_id'].month - b['_id'].month || a['_id'].year - b['_id'].year
})

console.log(rs3Data)
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
    osrsDataStats.maximum.push(tempObj["maximumPrice"])
    osrsDataStats.minimum.push(tempObj["minimumPrice"])
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
            backgroundColor: "rgb(153, 102, 255)",
            borderColor: "rgb(153, 102, 255)",
            fill: false,
        },
            {
                label: 'Daily Minimum #',
                data: osrsDataStats.minimum,
                backgroundColor: "rgb(75,192,192)",
                borderColor: "rgb(75, 192, 192)",
                fill: false,
            },
            {
                label: 'Daily Maximum #',
                data: osrsDataStats.maximum,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
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
    rs3DataStats.maximum.push(tempObj["maximumPrice"])
    rs3DataStats.minimum.push(tempObj["minimumPrice"])
}

console.log(rs3DataStats)
var ctxRS3 = "dailyAverageChartRS3"
var rs3DataStatsChart = new Chart(ctxRS3, {
    type: 'line',
    responsive: true,
    data: {
        labels: rs3DataStats.labels,
        datasets: [{
            label: 'Daily Average #',
            data: rs3DataStats.average,
            backgroundColor: "rgb(153, 102, 255)",
            borderColor: "rgb(153, 102, 255)",
            fill: false,
        },
            {
                label: 'Daily Minimum #',
                data: rs3DataStats.minimum,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgb(75, 192, 192)",
                fill: false,
            },
            {
                label: 'Daily Maximum #',
                data: rs3DataStats.maximum,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
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

