/* eslint-disable react/prop-types */
import { AppProvider } from '../hooks'
import { GlobalStyle } from '../styles/GlobalStyles'

const MyApp = ({ Component, pageProps }) => {
  console.log(pageProps)
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  )
}

export default MyApp
