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
            [0, 30],
            [20, 45],
            [50, 30],
            [80, 45],
            [100, 30]
        ],
        color: "#1dc4e9",
        lines: {
            show: true,
            fill: true,
            lineWidth: 0,
            fillColor: {
                colors: [{
                    opacity: 0.9
                },
                    {
                        opacity: 0.1
                    }
                ]
            },
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

class FlotChartLast3Days extends Component {

    render() {
        return <ReactFlot id='sale-view' options={optionsSaleView} data={dataSaleView} width="100%" height="200px" />
    }
}

export default FlotChartLast3Days;