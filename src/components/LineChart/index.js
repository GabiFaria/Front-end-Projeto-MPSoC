import React from 'react';
import Chart from 'chart.js';

function LineChart (){
    const chartRef = React.createRef();
    
    const myChartRef = chartRef.current.getContext('2d');

    new Chart (myChartRef, {
        type: 'line',
        data:{
            labels: ['janeiro', 'fevereiro', 'março'],
            datasets: [
                {
                    label: 'Sales',
                    data: [86, 67, 91],
                }
            ]
        }
    });
    return(
        <div>
            <canvas
                id="myChart"
                ref={chartRef}
            />
        </div>
        );
};

export default LineChart;