import { useState } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search || []

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = async () => {
    if (search) {
      const movies = await searchMovies({ search })
      setResponseMovies(movies)
    } else {
      setResponseMovies([])
    }
  }

  return { movies: mappedMovies, getMovies }
}
