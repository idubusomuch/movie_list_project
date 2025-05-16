import { createContext, useState, useEffect, useMemo } from 'react'
import { useSupabaseAuth } from '../supabase'
import { useContext } from 'react'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user])

  const { getUserInfo } = useSupabaseAuth()

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo()
      if (userInfo?.user) {
        setUser(userInfo.user)
      }
    }
    fetchUserInfo()
  }, [getUserInfo])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error('UserContext가 초기화되지 않았습니다.')
  return context
}
