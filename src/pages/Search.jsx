import { Link, useSearchParams } from 'react-router-dom'
import useFetch from '@hooks/useFetch'
import MovieCard from '@components/MovieCard'
import { fetchSearch } from '@api/fetchURL'
import { useCallback } from 'react'
import Spinner from '@components/Spinner'

export default function Search() {
  const [searchParams] = useSearchParams()
  const param = searchParams.get('query')
  const queryParam = useCallback(() => fetchSearch(param), [param])

  const { data, loading } = useFetch({
    query: queryParam,
  })

  // 성인 영화를 제외하고 가져오도록 필터링
  const movie = data?.results || []

  // 검색 결과
  return (
    <div className='max-w-[1200px] mx-auto px-4 pt-6'>
      <div className='size-full'>
        {loading ? ( // 로딩중
          <div className='h-full flex-center flex-col'>
            <Spinner />
            <p className='text-center'>검색 결과를 불러오는 중...</p>
          </div>
        ) : // 결과가 있을 경우
        movie && movie.length > 0 ? (
          <>
            <h2 className='text-2xl mb-4'>
              "<b>{param}</b>" 검색 결과
            </h2>
            <p>{movie.length}개의 영화가 검색되었습니다.</p>
            <div className='list-container'>
              {movie.map((el) => (
                <Link key={el.id} to={`/detail/${el.id}`}>
                  <MovieCard movie={el} />
                </Link>
              ))}
            </div>
          </>
        ) : (
          // 결과가 없을 경우
          <>
            <h2 className='text-2xl mb-4'>
              "<b>{param}</b>" 검색 결과
            </h2>
            <p className='text-center mt-16'>검색 결과가 없습니다.</p>
          </>
        )}
      </div>
    </div>
  )
}
