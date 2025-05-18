import { useState, useEffect, useRef } from 'react'

export function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isfirstInput = useRef(true)

  useEffect(() => {
    if (isfirstInput.current) {
      isfirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    setError(null)
  }, [search])
  return { search, updateSearch, error }
}
