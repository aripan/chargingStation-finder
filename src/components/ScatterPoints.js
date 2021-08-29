import React from "react";
import { Scatter } from "react-chartjs-2";
import { scatterPointsData } from "./ImportantFunctions";

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

const ScatterPoints = ({ chargingPoints }) => {
  let values;
  if (chargingPoints) {
    values = scatterPointsData(chargingPoints);
  }

  const data = {
    datasets: [
      {
        label: "A dataset",
        data: values,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return (
    <div>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterPoints;
