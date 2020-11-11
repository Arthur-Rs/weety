import { createContext, useCallback, useContext, useState } from 'react'

export interface UserProps {
  full_name: string
  first_name: string
  last_name: string
  birth_date: Date
}

export interface TokensProps {
  token: string
  refresh_token: string
}

export interface AuthContextProps {
  user: UserProps
  tokens: TokensProps
  login(): void
  logout(): void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('AuthContext não foi encontrado!')
  }

  return context
}

export const AuthProvider = ({ children }) => {
  const [user] = useState<UserProps>({} as UserProps)
  const [tokens] = useState<TokensProps>({} as TokensProps)

  const login = useCallback(() => {}, [])

  const logout = useCallback(() => {}, [])

  return (
    <AuthContext.Provider value={{ user, tokens, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
