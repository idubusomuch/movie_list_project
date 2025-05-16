import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const initialTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') return true
    if (theme === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  const [isDark, setIsDark] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return [isDark, () => setIsDark((d) => !d)]
}
