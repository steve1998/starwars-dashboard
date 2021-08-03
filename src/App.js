import Chart from "./components/Chart"
import Table from "./components/Table"
import "./App.css"

function App() {
  return (
    <div className="flex flex-col items-center mx-16 my-16">
      <div className="mb-16">
        <span className="relative font-bold text-black duration-300 hover:text-gray-600 text-4xl">
          Star Wars Planets Data Visualization
        </span>
      </div>
      <div className="mb-8">
        <Chart />
      </div>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default App
