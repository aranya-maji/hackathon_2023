window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Suicides commited all over India"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }], 
        axisX: {
            title: "Years"
        },
        axisY: {
            title: "Total Suicides",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: true
        },
        axisY2: {
            title: "Suicides by Students",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E",
            includeZero: true
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: "Total Suicides",
            showInLegend: true,      
            yValueFormatString: "#,##0.#",
            dataPoints: [
                { label: "2001",  y: 19034.5 },
                { label: "2002", y: 20015 },
                { label: "2003", y: 25342 },
                { label: "2004",  y: 20088 },
                { label: "2005",  y: 28234 },
                { label: "2006",  y: 29234 }
            ]
        },
        {
            type: "column",
            name: "Suicides by Students",
            axisYType: "secondary",
            showInLegend: true,
            yValueFormatString: "#,##0.#",
            dataPoints: [
                { label: "2001", y: 210.5 },
                { label: "2002", y: 135 },
                { label: "2003", y: 425 },
                { label: "2004", y: 130 },
                { label: "2005", y: 528 },
                { label: "2006", y: 428 }
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    
    }