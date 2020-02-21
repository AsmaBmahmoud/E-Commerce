import React from 'react';
import {Radar} from 'react-chartjs-2';

class RadarAreaChart3 extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(0, 0, 350, 0);
            theme_g1.addColorStop(0, 'rgb(29, 233, 182)');
            theme_g1.addColorStop(1, 'rgb(29, 196, 233)');
            let theme_g2 = bar.createLinearGradient(0, 0, 350, 0);
            theme_g2.addColorStop(0, 'rgb(137, 159, 212)');
            theme_g2.addColorStop(1, 'rgb(163, 137, 212)');

            return {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: "D1",
                    data: [60, 60, 45, 80, 60, 80, 45],
                    fill: true,
                    borderWidth: 2,
                    borderColor: theme_g1,
                    backgroundColor: "transparent",
                    hoverborderColor: theme_g1,
                    hoverBackgroundColor: "transparent",
                }, {
                    label: "D2",
                    data: [40, 80, 40, 65, 60, 50, 95],
                    fill: true,
                    cubicInterpolationMode: 'monotone',
                    borderWidth: 0,
                    borderColor: "rgb(4, 169, 245)",
                    backgroundColor: "transparent",
                    hoverborderColor: "rgb(4, 169, 245)",
                    hoverBackgroundColor: "transparent",
                }, {
                    label: "D3",
                    data: [20, 40, 80, 60, 85, 60, 20],
                    fill: true,
                    borderWidth: 2,
                    borderColor: theme_g2,
                    backgroundColor: "transparent",
                    hoverborderColor: theme_g2,
                    hoverBackgroundColor: "transparent",
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

export default RadarAreaChart3;