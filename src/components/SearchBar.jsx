export function SearchBar({ handleSubmit, handleChange, search, handleSort, error }) {
  return (
    <>
      <h1>MovieQuest</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input value={search} onChange={handleChange} placeholder="Insterstellar, Star Wars, Avengers ..." />
        <input type="checkbox" onChange={handleSort} />
        <button>Search</button>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  )
}
