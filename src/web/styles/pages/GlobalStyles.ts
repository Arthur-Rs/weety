import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 62.5%;

    @media(max-width: 1024px){
      font-size: 62.5%;
    }

    @media(max-width: 920px){
      font-size: 60%;
    }

    @media(max-width: 720px){
      font-size: 58%;
    }

    @media(max-width: 640px){
      font-size: 56%;
    }

    @media(max-width: 540px){
      font-size: 54%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: ${({ theme }) => theme.colors.text.normal};
    font-family: 'Roboto', sans-serif;
  }

  input{
    border: none;
  }

  body {
    background: ${({theme})=> theme.colors.background.dark};
  }

  button, a{
    cursor: pointer;
  }
`