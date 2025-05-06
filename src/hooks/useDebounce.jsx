import React, { useEffect, useState } from 'react'

export default function useDebounce(value, delay = 1000) {
  const [debounce, setDebounce] = useState(value)

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounce(value)
    }, delay)
    return () => clearTimeout(debounceTimer)
  }, [value])
  return debounce
}
