import { Routes, Route } from 'react-router-dom'
import { useSupabaseAuth } from './supabase'
import { useEffect } from 'react'
import { MovieDetail } from '@pages/MovieDetail'
import Main from '@pages/Main'
import Layout from '@components/Layout'
import ErrorPage from '@components/ErrorPage'
import Search from '@pages/Search'
import Login from '@pages/Login'
import Signup from './pages/Signup'
import Mypage from '@pages/Mypage'

function App() {
  const { getUserInfo } = useSupabaseAuth()
  useEffect(() => {
    const fetchUser = async () => {
      await getUserInfo()
    }
    fetchUser()
  }, [getUserInfo])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />}></Route>
          <Route path='/detail/:id' element={<MovieDetail />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/mypage' element={<Mypage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
