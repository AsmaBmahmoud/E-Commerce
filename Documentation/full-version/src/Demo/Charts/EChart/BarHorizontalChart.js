import React from 'react';
import ReactEcharts from 'echarts-for-react';

class BarHorizontalChart extends React.Component {
    getOption = () => {
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['2017', '2018']
            },
            color: ['rgba(163, 137, 212, 1)', 'rgba(28, 233, 181, 1)'],
            calculable: true,
            xAxis: [{
                type: 'value',
                boundaryGap: [0, 0.01]
            }],
            yAxis: [{
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }],
            series: [
                {
                    name: '2017',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 130230, 29034]
                },
                {
                    name: '2018',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 181807, 31000]
                }
            ]
        }
    };

    render() {
        return <ReactEcharts option={this.getOption()} style={{height: '300px', width: '100%'}}/>;
    }
}

export default BarHorizontalChart;