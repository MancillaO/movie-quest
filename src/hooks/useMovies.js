import { useState, useRef, useMemo, useCallback } from 'react'
import { sortMoviesbyLatest, sortByPopularity } from '../utils/sortMovies.js'
import { searchMovies } from '../services/movies.js'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return
    try {
      setLoading(true)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    if (!movies) return null
    const sortedMovies = sortByPopularity(movies)
    return sort ? sortMoviesbyLatest(sortedMovies) : sortedMovies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, error, loading }
}
