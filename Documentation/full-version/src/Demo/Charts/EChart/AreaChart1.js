import React from 'react';
import ReactEcharts from 'echarts-for-react';

class AreaChart1 extends React.Component {
    getOption = () => {
        return {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            color: '#04a9f5',
            series: [{
                data: [1, 5, 3, 6, 4, 8, 10],
                type: 'line',
            }]
        }
    };

    render() {
        return <ReactEcharts option={this.getOption()} style={{height: '300px', width: '100%'}}/>;
    }
}

export default AreaChart1;