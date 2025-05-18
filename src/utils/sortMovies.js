export const sortMoviesbyLatest = (movies) => {
  return [...movies].sort((a, b) => b.year - a.year)
}
