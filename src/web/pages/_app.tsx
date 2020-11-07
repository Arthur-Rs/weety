import { AppProvider } from "../hooks"
import { GlobalStyle } from "../styles/pages/GlobalStyles"

const MyApp = ({ Component, pageProps }) => (
  <AppProvider>
    <Component {...pageProps} />
    <GlobalStyle/>
  </AppProvider>
)

export default MyApp
