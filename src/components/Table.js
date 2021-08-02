import { useCallback, useEffect, useState } from "react"
import { getPlanetsPerPage } from "../services/api"

export default function Table() {
  const [data, setData] = useState({})

  const handlePrevious = useCallback(async () => {
    if (data.previous !== null) {
      const res = await getPlanetsPerPage(data.previous)
      setData(res.data)
    }
  }, [data])

  const handleNext = useCallback(async () => {
    if (data.next !== null) {
      const res = await getPlanetsPerPage(data.next)
      setData(res.data)
    }
  }, [data])

  useEffect(() => {
    getPlanetsPerPage().then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div className="flex flex-col">
      <div className="sm:px-6 lg:px-8 overflow-x-auto">
        <div className="overflow-hidden border border-gray-200 rounded-lg mb-4">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="font-bold p-6 text-sm tracking-wider">Name</th>
                <th className="font-bold p-6 text-sm tracking-wider">
                  Population
                </th>
                <th className="font-bold p-6 text-sm tracking-wider">
                  Rotation Period
                </th>
                <th className="font-bold p-6 text-sm tracking-wider">
                  Orbital Period
                </th>
                <th className="font-bold p-6 text-sm tracking-wider">
                  Diameter
                </th>
                <th className="font-bold p-6 text-sm tracking-wider">
                  Climate
                </th>
                <th className="font-bold p-6 text-sm tracking-wider">
                  Surface Water
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.results?.map((result, index) => {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium">
                      {result.name}
                    </td>
                    <td className="px-6 py-4 text-sm font-regular">
                      {result.population}
                    </td>
                    <td className="px-6 py-4 text-sm font-regular">
                      {result.rotation_period}
                    </td>
                    <td className="px-6 py-4 text-sm font-regular">
                      {result.orbital_period}
                    </td>
                    <td className="px-6 py-4 text-sm font-regular">
                      {result.diameter}
                    </td>
                    <td className="px-6 py-4 text-sm font-regular">
                      {result.climate}
                    </td>
                    <td className="px-6 py-4 text-sm font-regular">
                      {result.surface_water}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="mr-4 px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-lg hover:bg-red-700 duration-300"
            onClick={handlePrevious}
          >
            Previous Page
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-lg hover:bg-red-700 duration-300"
            onClick={handleNext}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  )
}
