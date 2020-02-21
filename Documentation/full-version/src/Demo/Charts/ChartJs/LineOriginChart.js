import React from 'react';
import {Line} from 'react-chartjs-2';

class LineOriginChart extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
            theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.8)');
            theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.8)');

            return {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: "D1",
                    data: [85, 55, 70, 50, 75, 45, 60],
                    borderWidth: 1,
                    borderColor: theme_g1,
                    backgroundColor: theme_g1,
                    hoverborderColor: theme_g1,
                    hoverBackgroundColor: theme_g1,
                    fill: 'origin',
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

export default LineOriginChart;