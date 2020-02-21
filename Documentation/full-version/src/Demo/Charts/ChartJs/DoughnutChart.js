import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(100, 0, 300, 0);
            theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.9)');
            theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.9)');
            let theme_g2 = bar.createLinearGradient(100, 0, 300, 0);
            theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.9)');
            theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.9)');

            return {
                labels: [
                    "Data 1",
                    "Data 2",
                    "Data 3"
                ],
                datasets: [{
                    data: [30, 30, 40],
                    backgroundColor: [
                        theme_g1,
                        theme_g2,
                        "#04a9f5"
                    ],
                    hoverBackgroundColor: [
                        theme_g1,
                        theme_g2,
                        "#04a9f5"
                    ]
                }]
            }
        };

        return (
            <Doughnut
                data={data}
                responsive={true}
                height={300}
                options={{
                    maintainAspectRatio: false
                }}
            />
        );
    }
}

export default DoughnutChart;