import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components'
import { DarkTheme } from "../styles/themes/dark";
import { LightTheme } from "../styles/themes/light";


type theme = 'light' | 'dark'

interface IContext{
  theme: DefaultTheme
  setTheme(theme: theme): void
  toggleTheme(): void
}

const ThemeContext = createContext<IContext>({} as IContext)

export const useTheme = ():IContext => {
  const context = useContext(ThemeContext)

  if(!context){
    throw new Error('ThemeContext não foi encontrado!')
  }

  return context
}

export const ThemeProvider = ({children}) => {
  const themes = useMemo(() => ({
    dark: DarkTheme,
    light: LightTheme
  }), [])

  const [themeSelected, setThemeSelected] = useState<DefaultTheme>(themes.dark)

  useEffect(()=>{
    const themeName = localStorage.getItem('@weety:theme')
    

    if(themeName){
      setThemeSelected(themes[themeName])
    }

    setThemeSelected(themes.dark)    
  },[themes])

  const setTheme = useCallback((theme: theme)=>{
    setThemeSelected(themes[theme])
    localStorage.setItem('@weety:theme', theme)
  },[themes])

  const toggleTheme = useCallback(()=>{
    setThemeSelected(({name}) => {
      if(name === 'dark'){
        localStorage.setItem('@weety:theme', 'light')
        return themes.light
      } 
      
      localStorage.setItem('@weety:theme', 'dark')
      return themes.dark 
    })
  },[])

  return (
    <ThemeContext.Provider value={{setTheme, toggleTheme, theme: themeSelected}}>
      <StyledThemeProvider theme={themeSelected}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}