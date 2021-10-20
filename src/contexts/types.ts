import { ReactNode } from 'react'

export type AuthContextData = {
  user: User | null
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  signInUrl: string
  signOut: () => void
}

export type AuthProviderProps = {
  children: ReactNode
}

export type AuthResponse = {
  token: string
  user: User
}

export type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}
