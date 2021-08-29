import React from 'react';
import { Scatter } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);



const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ScatterPoints = () => {
    


    const data = {
        datasets: [
          {
            label: 'A dataset',
            data: [
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
              { x: rand(), y: rand() },
            ],
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };
    return (
        <div>
           <Scatter data={data} options={options} /> 
        </div>
    )
}

export default ScatterPoints
