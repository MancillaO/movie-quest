function listMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  )
}

function noMoviesFound() {
  return <p>No se encontraron peliculas para esta busqueda</p>
}

export function Movies({ movies }) {
  return movies ? listMovies({ movies }) : noMoviesFound()
}
