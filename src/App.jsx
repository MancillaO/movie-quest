import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import { Movies } from './components/movies.jsx'
import './App.css'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSort = () => {
    setSort(!sort)
  }

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log(search)
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    debouncedGetMovies(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className="page">
      <header>
        <h1>MovieQuest</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} placeholder="Insterstellar, Star Wars, Avengers ..." />
          <input type="checkbox" onChange={handleSort} />
          <button>Search</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
