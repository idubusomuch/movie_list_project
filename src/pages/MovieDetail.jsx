import { useParams } from 'react-router-dom'
import { useCallback } from 'react'
import { MovieDetailSkeleton } from '@components/SkeletonUI'
import useFetch from '@hooks/useFetch'
import { fetchDetail } from '@api/fetchURL'

export function MovieDetail() {
  const params = useParams()
  const movieId = params.id
  const queryId = useCallback(() => fetchDetail(movieId), [movieId])

  const { data: movieData, loading } = useFetch({
    query: queryId,
  })

  if (loading || !movieData) {
    return <MovieDetailSkeleton />
  }

  return (
    <>
      <div className='md:p-10 h-full'>
        <div className='flex-column h-full bg-white dark:bg-gray-800 md:flex-row md:space-x-6 md:rounded-lg md:mx-auto max-w-[1200px] md:gray-border md:filter-shadow'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
            className='w-full object-cover md:rounded-l-lg md:w-[50%]'
          />
          <div className='flex-column p-6 gap-3 md:px-4 md:py-6'>
            <div className='text-4xl'>{movieData.title}</div>
            <div className='text-gray-400 whitespace-nowrap'>⭐️ {movieData.vote_average}점</div>
            <div className='border-b-2 pb-7'>
              <b>장르</b> | {movieData.genres.map((el) => el.name).join(', ')}
            </div>
            <div className='pt-3'>{movieData.overview}</div>
          </div>
        </div>
      </div>
    </>
  )
}
