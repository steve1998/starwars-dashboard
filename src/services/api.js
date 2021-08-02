import axios from "axios"
import url from "../constants/url.json"

export const getPlanets = async () => {
  let data = []
  let next = url.BASE_URL

  while (next !== null) {
    const res = await axios.get(next)
    data = data.concat(res.data.results)
    next = res.data.next
  }

  return data
}

export const getPlanetsPerPage = async (uri = url.BASE_URL) => {
  const res = await axios.get(uri)
  return res
}
