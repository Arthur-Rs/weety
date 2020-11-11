import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'dark' | 'light'
    colors: {
      background: {
        dark: string
        normal: string
        light: string
      }
      text: {
        dark: string
        normal: string
        light: string
        link: string
      }
      primary: string
      secondary: string

      black: string
      white: string
      red: string
      green: string
      blue: string
    }
  }
}
