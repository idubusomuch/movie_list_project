export function ImageSlideSkeleton() {
  return <div className='w-full flex-shrink-0 h-[360px] bg-gray-300 mb-4'></div>
}

export function MovieCardSkeleton() {
  return (
    <div className='size-full space-y-2'>
      <div className='aspect-[2/3] skeleton-item'></div>
      <div className='w-1/2 h-4 skeleton-item'></div>
      <div className='w-1/2 h-4 skeleton-item'></div>
    </div>
  )
}

export function MovieDetailSkeleton() {
  return (
    <>
      <div className='md:p-10 h-full'>
        <div className='flex-column h-full md:flex-row md:rounded-lg md:mx-auto max-w-[1200px] md:gray-border'>
          <div className='w-full h-[350px] skeleton-item md:w-1/2 md:h-full' />
          <div className='w-full flex-column p-6 gap-3 md:w-1/2 md:py-6'>
            <div className='h-12 skeleton-item'></div>
            <div className='w-1/4 h-5 skeleton-item'></div>
            <div className='w-1/2 h-6 skeleton-item'></div>
            <div className='border-b-2 my-4'></div>
            <div className='min-h-[100px] skeleton-item md:flex-grow'></div>
          </div>
        </div>
      </div>
    </>
  )
}
