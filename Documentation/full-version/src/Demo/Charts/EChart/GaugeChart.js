import React from 'react';
import ReactEcharts from 'echarts-for-react';

class GaugeChart extends React.Component {
    getOption = () => {
        return {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            series: [{
                name: 'gauge Chart',
                type: 'gauge',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0.2, '#1de9b6'],
                            [0.8, '#04a9f5'],
                            [1, '#A389D4']
                        ],
                        width: 10
                    }
                },
                detail: {
                    formatter: '{value}%'
                },
                data: [{
                    value: 50,
                    name: ''
                }]
            }]
        }
    };

    render() {
        return <ReactEcharts option={this.getOption()} style={{height: '450px', width: '100%'}}/>;
    }
}

export default GaugeChart;