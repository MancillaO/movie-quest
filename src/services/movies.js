import { config } from '../config.js'

export const searchMovies = async ({ search }) => {
  if (!search) return null
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${config.API_KEY}`)
    const data = await response.json()
    const movies = data.Search || []

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch {
    throw new Error('Error al buscar películas')
  }
}
