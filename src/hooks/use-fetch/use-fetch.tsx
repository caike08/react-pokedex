import { useEffect, useState } from 'react'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      await fetch(url)
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    fetchData()
  }, [url])

  return { data, error, loading }
}

export default useFetch
