export const sortMoviesbyLatest = (movies) => {
  return [...movies].sort((a, b) => b.year - a.year)
}

export const sortByPopularity = (movies) => {
  return [...movies].sort((a, b) => b.popularity - a.popularity)
}
