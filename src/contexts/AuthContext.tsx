import { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextData, AuthProviderProps, AuthResponse, User } from './types'
import { api } from '../services/api'

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=b84b086b38d636a53970`

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      setIsLoading(true)
      const [urlWithoutCode, githubCode] = url.split('?code=')

      window.history.pushState({}, '', urlWithoutCode)

      signIn(githubCode)
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('profile').then(({ data }) => {
        setUser(data)
      })
    }
  }, [])

  async function signIn(githubCode: string) {
    try {
      const { data } = await api.post<AuthResponse>('authenticate', {
        code: githubCode,
      })

      const { token, user } = data

      api.defaults.headers.common.authorization = `Bearer ${token}`

      localStorage.setItem('@dowhile:token', token)

      setUser(user)
      setIsLoading(false)
    } catch (error: any) {
      console.error(error.message)
      setIsLoading(false)
    }
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoading, setIsLoading, signInUrl, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
