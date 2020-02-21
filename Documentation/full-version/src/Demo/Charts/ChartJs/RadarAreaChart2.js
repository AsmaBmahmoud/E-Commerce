import React from 'react';
import {Radar} from 'react-chartjs-2';

class RadarAreaChart2 extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(0, 0, 350, 0);
            theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.4)');
            theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.4)');
            let theme_g2 = bar.createLinearGradient(0, 0, 350, 0);
            theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.4)');
            theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.4)');

            return {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: "D1",
                    data: [60, 60, 45, 80, 60, 80, 45],
                    fill: true,
                    borderWidth: 2,
                    borderColor: theme_g1,
                    backgroundColor: theme_g1,
                    hoverborderColor: theme_g1,
                    hoverBackgroundColor: theme_g1,
                }, {
                    label: "D2",
                    data: [40, 80, 40, 65, 60, 50, 95],
                    fill: true,
                    cubicInterpolationMode: 'monotone',
                    borderWidth: 0,
                    borderColor: "rgba(4, 169, 245, 0.4)",
                    backgroundColor: "rgba(4, 169, 245, 0.4)",
                    hoverborderColor: "rgba(4, 169, 245, 0.4)",
                    hoverBackgroundColor: "rgba(4, 169, 245, 0.4)",
                }, {
                    label: "D3",
                    data: [20, 40, 80, 60, 85, 60, 20],
                    fill: true,
                    borderWidth: 2,
                    borderColor: theme_g2,
                    backgroundColor: theme_g2,
                    hoverborderColor: theme_g2,
                    hoverBackgroundColor: theme_g2,
                }]
            }
        };

        return (
            <Radar
                data={data}
                responsive={true}
                height={300}
                options={{
                    barValueSpacing: 20,
                    maintainAspectRatio: false
                }}
            />
        );
    }
}

export default RadarAreaChart2;