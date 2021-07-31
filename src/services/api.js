import axios from "axios"

export const getPlanets = async () => {
  let data = []
  let next = "https://swapi.dev/api/planets"

  while (next !== null) {
    const res = await axios.get(next)
    data = data.concat(res.data.results)
    next = res.data.next
  }

  return data
}
