import { useState } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/movies.jsx'
import './App.css'
import { useEffect } from 'react'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  // const API_PREFIX = 'https://www.omdbapi.com/'

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con solo numeros')
    }
    setError(null)
  }, [query])

  return (
    <div className="page">
      <header>
        <h1>MovieQuest</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={query} onChange={handleChange} placeholder="Insterstellar, Star Wars, Avengers ..." />
          <button>Search</button>
        </form>
        {error && <p style={{ color: 'tomato' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
