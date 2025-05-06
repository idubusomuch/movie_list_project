import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useFetch({ url, errorNavigate = true, adultFilter = false }) {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const navigate = useNavigate()
  const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN

  useEffect(() => {
    const fetchAPI = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error('데이터를 불러오지 못했습니다.')
        }
        const data = await response.json()
        // 목록을 불러올 때 성인 영화만 아닌 영화들을 필터링하기 위함
        if (adultFilter) {
          setMovie(data.results.filter((el) => !el.adult))
        } else {
          // 상세 페이지에서는 위 과정이 필요없으므로 생략
          setMovie(data)
        }
      } catch (err) {
        console.error('err', err)
        if (errorNavigate) navigate('/error')
      } finally {
        setLoading(false)
      }
    }

    fetchAPI()
  }, [url, API_TOKEN])

  return { movie, loading }
}
