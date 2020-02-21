import React, { Component } from 'react';
import ReactFlot from 'react-flot';

const optionsSaleView = {
    series: {
        label: "",
        curvedLines: {
            active: true
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
        max: 90,
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
            [0, 50],
            [20, 70],
            [35, 45],
            [50, 73],
            [65, 85],
        ],
        color: "#1dc4e9",
        lines: {
            show: true,
            fill: false,
            lineWidth: 3,

        },
        points: {
            show: false,
            radius: 3,
            fill: true
        },
        curvedLines: {
            apply: true
        }
    }
];

class FlotChartUserCard extends Component {

    render() {
        return <ReactFlot id='power-card-chart' options={optionsSaleView} data={dataSaleView} width="100%" height="100px" />
    }
}

export default FlotChartUserCard;