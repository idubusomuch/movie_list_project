import { fetchAPI } from './fetchAPI'

const API_URL = 'https://api.themoviedb.org/3/'

export const fetchMain = () => {
  return fetchAPI(`${API_URL}movie/popular?language=ko&include_adult=false&page=1&region=KR`)
}
export const fetchSearch = (query) => {
  return fetchAPI(`${API_URL}search/movie?query=${query}&include_adult=false&language=ko`)
}
export const fetchDetail = (movieId) => {
  return fetchAPI(`${API_URL}movie/${movieId}?language=ko`)
}
