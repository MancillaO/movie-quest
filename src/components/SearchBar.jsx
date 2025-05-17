export function SearchBar({ handleSubmit }) {
  return (
    <form className="form">
      <input placeholder="Insterstellar, Star Wars, Avengers ..." />
      <button onClick={handleSubmit}>Search</button>
    </form>
  )
}
