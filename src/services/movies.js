import { config } from '../config.js'

export const searchMovies = async ({ search }) => {
  if (!search) return null
  try {
    const response = await fetch(`${config.API_BASE_URL}?api_key=${config.API_KEY}&query=${search}`)
    const data = await response.json()
    const movies = data.results || []

    return movies.map((movie) => ({
      id: String(movie.id),
      title: movie.title,
      popularity: movie.popularity,
      year: movie.release_date?.substring(0, 4) || 'N/A',
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'N/A'
    }))
  } catch {
    throw new Error('Error al buscar películas')
  }
}
