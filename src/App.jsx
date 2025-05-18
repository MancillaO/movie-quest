import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import { Movies } from './components/movies.jsx'
import './App.css'

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
  }

  return (
    <div className="page">
      <header>
        <h1>MovieQuest</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} placeholder="Insterstellar, Star Wars, Avengers ..." />
          <button>Search</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
