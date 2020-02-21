import React from 'react';
import {Line} from 'react-chartjs-2';

class LineInterpolationChart extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
            theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.4)');
            theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.5)');
            let theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
            theme_g2.addColorStop(0, '#899FD4');
            theme_g2.addColorStop(1, '#A389D4');

            return {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: "D1",
                    data: [55, 70, 62, 81, 56, 70, 90],
                    fill: false,
                    borderWidth: 4,
                    lineTension: 0,
                    borderDash: [15, 10],
                    borderColor: theme_g2,
                    backgroundColor: theme_g2,
                    hoverborderColor: theme_g2,
                    hoverBackgroundColor: theme_g2,
                }, {
                    label: "D2",
                    data: [85, 55, 70, 50, 75, 45, 60],
                    fill: true,
                    cubicInterpolationMode: 'monotone',
                    borderWidth: 0,
                    borderColor: theme_g1,
                    backgroundColor: theme_g1,
                    hoverborderColor: theme_g1,
                    hoverBackgroundColor: theme_g1,
                }, {
                    label: "D3",
                    data: [50, 75, 80, 70, 85, 80, 70],
                    fill: false,
                    borderWidth: 4,
                    borderColor: "#04a9f5",
                    backgroundColor: "#04a9f5",
                    hoverborderColor: "#04a9f5",
                    hoverBackgroundColor: "#04a9f5",
                }]
            }
        };

        return (
            <Line
                data={data}
                responsive={true}
                height={300}
                options={{
                    barValueSpacing: 20,
                    maintainAspectRatio: false,
                }}
            />
        );
    }
}

export default LineInterpolationChart;