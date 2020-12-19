import axios from "axios"
const baseUrl = `https://api.kanye.rest/`
const getRandot = () => {
  return axios.get(baseUrl)
}

export default { getRandot }
