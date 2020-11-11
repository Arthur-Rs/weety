import { AuthProvider } from './AuthHook'
import { ThemeProvider } from './ThemeHook'

export const AppProvider = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
)
