import { ThemeProvider } from "./ThemeHook";

export const AppProvider = ({children}) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)