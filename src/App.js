import { useEffect, useState } from "react"
import Chart from "./components/Chart"
import Table from "./components/Table"
import { getPlanets } from "./services/api"
import "./App.css"

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    getPlanets().then((res) => {
      setResults(res)
    })
  }, [])

  return (
    <div className="flex flex-col items-center mx-16 my-16">
      <div className="mb-8">
        <span className="font-bold text-black duration-300 hover:text-gray-600 text-4xl">
          Star Wars Planets Data Visualization
        </span>
      </div>
      {results.length > 0 ? (
        <div>
          <div className="mb-8">
            <Chart
              names={results.map((result) => result.name)}
              populations={results.map((result) => result.population)}
            />
          </div>
          <div>
            <Table />
          </div>
        </div>
      ) : (
        <span>Loading data...</span>
      )}
    </div>
  )
}

export default App
