import { config } from '../config.js'

export const searchMovies = async ({ search }) => {
  const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${config.API_KEY}`)
  const data = await response.json()
  return data
}
