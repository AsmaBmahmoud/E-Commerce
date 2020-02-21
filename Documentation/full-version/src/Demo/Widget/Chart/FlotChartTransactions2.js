import React, { Component } from 'react';
import ReactFlot from 'react-flot';

const optionsSaleView = {
    series: {
        label: "",
        curvedLines: {
            active: true,
            nrSplinePoints: 0
        },
    },
    tooltip: {
        show: true,
        content: "x : %x | y : %y"
    },
    grid: {
        hoverable: true,
        borderWidth: 0,
        labelMargin: 0,
        axisMargin: 0,
        minBorderMargin: 0,
    },
    yaxis: {
        min: 0,
        max: 50,
        color: 'transparent',
        font: {
            size: 0,
        }
    },
    xaxis: {
        color: 'transparent',
        font: {
            size: 0,
        }
    }
};
const dataSaleView = [
    {
        data: [
            [0, 44],
            [1, 26],
            [2, 22],
            [3, 35],
            [4, 28],
            [5, 35],
            [6, 28],
        ],
        color: "#1dc4e9",
        bars: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 1
                }, {
                    opacity: 1
                }]
            },
            barWidth: 0.2,
            align: 'center',
            horizontal: false
        },
        points: {
            show: false,
            radius: 3,
            fill: true
        },
        curvedLines: {
            apply: false,
        }
    }
];

class FlotChartTransactions2 extends Component {

    render() {
        return <ReactFlot id='transactions2' options={optionsSaleView} data={dataSaleView} width="80px" height="50px" style={{margin: '0 auto'}} />
    }
}

export default FlotChartTransactions2;