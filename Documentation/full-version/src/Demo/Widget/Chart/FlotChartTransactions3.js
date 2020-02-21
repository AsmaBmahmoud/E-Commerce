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
            [0, 40],
            [1, 30],
            [2, 25],
            [3, 38],
            [4, 30],
            [5, 38],
            [6, 30],
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

class FlotChartTransactions3 extends Component {

    render() {
        return <ReactFlot id='transactions3' options={optionsSaleView} data={dataSaleView} width="80px" height={this.props.height} style={{margin: '0 auto'}} />
    }
}

export default FlotChartTransactions3;