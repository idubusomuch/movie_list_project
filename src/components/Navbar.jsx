import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <header className='w-full bg-black text-white'>
        <div
          className={`flex justify-between mx-auto w-full max-w-[1200px] py-3 ${
            isOpen ? 'flex-col items-start' : ''
          } sm:flex-row sm:items-center`}
        >
          <Link to={'/'}>
            <h2 className='font-extrabold text-3xl px-4'>OZ MOVIE</h2>
          </Link>
          <input
            className='text-3xl sm:hidden cursor-pointer absolute right-3 top-2'
            type='button'
            value='☰'
            onClick={() => setIsOpen((prev) => !prev)}
          />
          <div className={`${isOpen ? 'mobile-toggleMenu' : 'hidden'} sm:flex sm:items-center`}>
            <div className='sm:mx-6'>
              <input
                type='text'
                placeholder='영화 제목을 검색해보세요.'
                className='w-full focus:outline-none px-2 py-1 mr-6 min-w-[240px] text-black sm:rounded-md'
                onChange={(e) => navigate(`/search?movie=${e.target.value}`)}
              />
            </div>
            <div className='space-x-5 sm:mr-4'>
              <Link to={'/login'}>
                <button className=' hover:text-gray-500 transition-all'>로그인</button>
              </Link>
              <Link to={'/join'}>
                <button className='hover:text-gray-500 transition-all'>회원가입</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
