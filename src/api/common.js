const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
}

export default options
