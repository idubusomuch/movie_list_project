import { Link, useSearchParams } from 'react-router-dom'
import useFetch from '@hooks/useFetch'
import MovieCard from '@components/MovieCard'
import { MovieCardSkeleton } from '@components/SkeletonUI'
import useDebounce from '../hooks/useDebounce'

export default function Search() {
  const [searchParams] = useSearchParams()
  const param = searchParams.get('movie')
  const debounceParam = useDebounce(param, 1000)

  const { movie, loading } = useFetch({
    url: `https://api.themoviedb.org/3/search/movie?query=${debounceParam}&language=ko`,
    adultFilter: true,
  })

  // 검색 결과
  return (
    <div className='max-w-[1200px] mx-auto px-4 pt-6'>
      <div className='w-full h-full'>
        <h2 className='text-2xl mb-4'>
          "<b>{debounceParam}</b>" 검색 결과
        </h2>
        <p>{movie.length}개의 영화가 검색되었습니다.</p>
        <div className='list-container'>
          {loading
            ? Array.from({ length: 20 }).map((_, index) => <MovieCardSkeleton key={index} />)
            : movie.map((el) => (
                <Link key={el.id} to={`/detail/${el.id}`}>
                  <MovieCard movie={el} />
                </Link>
              ))}
        </div>
      </div>
    </div>
  )
}
