export default function Table(props) {
  const { results } = props

  return (
    <div className="flex flex-col">
      <div className="sm:px-6 lg:px-8 overflow-x-auto">
        <div className="overflow-hidden border border-gray-200 rounded-lg">
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
              {results.map((result) => {
                return (
                  <tr>
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
      </div>
    </div>
  )
}
