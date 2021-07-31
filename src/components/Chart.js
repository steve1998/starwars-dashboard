import React from "react"
import { Bar } from "react-chartjs-2"

export default function Chart(props) {
  const { names, populations } = props
  console.log(populations)

  const options = {
    animation: {},
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  }

  const dataset = {
    labels: names,
    datasets: [
      {
        label: "Population",
        data: populations,
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        backgroundColor: "rgba(202, 62, 67, 0.8)",
        borderColor: "rgba(202, 62, 67, 1)",
        hoverBackgroundColor: "rgba(202, 62, 67, 1)",
      },
    ],
  }

  return <Bar data={dataset} width={800} height={400} options={options} />
}
