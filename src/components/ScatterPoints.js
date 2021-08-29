import React from "react";
import { Scatter } from "react-chartjs-2";
import { scatterPointsData } from "./ImportantFunctions";
import Popup from "./Popup";

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

  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Popup />
      <div
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default ScatterPoints;
