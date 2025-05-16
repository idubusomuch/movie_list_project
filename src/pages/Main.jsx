import { Link } from 'react-router-dom'
import MovieCard from '@components/MovieCard'
import ImageSlide from '@components/ImageSlide'
import { MovieCardSkeleton } from '@components/SkeletonUI'
import { ImageSlideSkeleton } from '@components/SkeletonUI'
import useFetch from '@hooks/useFetch'
import { fetchMain } from '@api/fetchURL'

export default function Main() {
  const { data, loading } = useFetch({
    query: fetchMain,
  })
  const movie = data?.results || []

  return (
    <>
      <div className='size-full flex-column'>
        {loading ? <ImageSlideSkeleton /> : <ImageSlide movie={movie} />}
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
    </>
  )
}
