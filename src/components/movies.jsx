function listMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <img src={movie.poster} alt={movie.Title} />
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  )
}

function noMoviesFound() {
  return <p>No se encontraron peliculas para esta busqueda</p>
}

export function Movies({ movies }) {
  return movies.length > 0 ? listMovies({ movies }) : noMoviesFound()
}
