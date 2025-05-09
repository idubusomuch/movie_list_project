import MovieCard from '@components/MovieCard'
import { Link } from 'react-router-dom'
import { MovieCardSkeleton } from '@components/SkeletonUI'
import ImageSlide from '@components/ImageSlide'
import useFetch from '@hooks/useFetch'
import { ImageSlideSkeleton } from '../components/SkeletonUI'

export default function Main() {
  const { data, loading } = useFetch({
    url: 'https://api.themoviedb.org/3/movie/popular?language=ko&include_adult=false&page=1&region=KR',
  })
  const movie = data?.results || []

  return (
    <>
      <div className='w-full h-full'>
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
