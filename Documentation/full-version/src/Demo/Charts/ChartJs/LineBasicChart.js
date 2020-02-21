import React from 'react';
import {Line} from 'react-chartjs-2';

class LineBasicChart extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
            theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.6)');
            theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.6)');
            let theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
            theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.6)');
            theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.6)');

            return {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: "D1",
                    data: [45, 60, 45, 80, 60, 80, 45],
                    fill: true,
                    borderWidth: 4,
                    borderColor: theme_g1,
                    backgroundColor: theme_g1,
                    hoverborderColor: theme_g1,
                    hoverBackgroundColor: theme_g1,
                }, {
                    label: "D2",
                    data: [45, 80, 45, 45, 60, 45, 80],
                    fill: true,
                    cubicInterpolationMode: 'monotone',
                    borderWidth: 0,
                    borderColor: "rgba(4, 169, 245, 0.6)",
                    backgroundColor: "rgba(4, 169, 245, 0.6)",
                    hoverborderColor: "rgba(4, 169, 245, 0.6)",
                    hoverBackgroundColor: "rgba(4, 169, 245, 0.6)",
                }, {
                    label: "D3",
                    data: [83, 45, 60, 45, 45, 55, 45],
                    fill: true,
                    borderWidth: 4,
                    borderColor: theme_g2,
                    backgroundColor: theme_g2,
                    hoverborderColor: theme_g2,
                    hoverBackgroundColor: theme_g2,
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

export default LineBasicChart;