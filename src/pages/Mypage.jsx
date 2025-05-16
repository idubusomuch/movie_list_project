import React from 'react'
import { useUser } from '../context/userContext'

export default function Mypage() {
  const { user } = useUser()

  if (!user) {
    return <p className='text-center'>로그인 정보가 없습니다.</p>
  }
  console.log(user)
  return (
    <>
      <div className='h-full py-8 px-4'>
        <div className='max-w-xl mx-auto bg-skin shadow-xl rounded-lg p-6'>
          <h1 className='text-3xl font-bold text-center mb-6'>마이페이지</h1>
          <div>
            <img
              src={user.profileImageUrl}
              alt='profile Image'
              className='rounded-full m-auto max-w-40  max-h-40'
            />
          </div>
          <div className='flex-column justify-between py-8'>
            <h3 className='text-2xl font-semibold pb-1 border-b-[1px]'>{user.userName}</h3>
            <p className='pt-1 text-gray-600'>{user.email}</p>
          </div>
        </div>
      </div>
    </>
  )
}
