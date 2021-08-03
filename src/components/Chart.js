import React, { useEffect, useState } from "react"
import { getPlanets } from "../services/api"
import { Bar } from "react-chartjs-2"

export default function Chart() {
  const [names, setNames] = useState([])
  const [populations, setPopulations] = useState([])

  useEffect(() => {
    getPlanets().then((res) => {
      console.log(res)
      if (res.length > 0) {
        const x = res.map((result) => result.name)
        const y = res.map((result) => result.population)
        setNames(x)
        setPopulations(y)
      }
    })
  }, [])

  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Star Wars Population Chart",
      },
    },
    scales: {
      yAxis: {
        type: "logarithmic",
        position: "left", // `axis` is determined by the position as `'y'`
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      xAxis: {
        ticks: {
          autoSkip: false,
          font: {
            size: 10,
          },
        },
      },
    },
  }

  const data = (canvas) => {
    return {
      labels: names,
      datasets: [
        {
          label: "Population",
          data: populations,
          backgroundColor: "rgba(202, 62, 67, 0.5)",
          borderColor: "rgba(202, 62, 67, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(202, 62, 67, 1)",
        },
      ],
    }
  }

  return (
    <div className="flex flex-col items-center">
      {names.length > 0 && populations.length > 0 ? (
        <div className="Chart-wrapper">
          <Bar data={data} options={options} />
        </div>
      ) : (
        <span>Loading chart data...</span>
      )}
    </div>
  )
}
