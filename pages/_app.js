import '../styles/globals.css'
import { ChancesProvider } from '../src/contexts/ChancesContext';

function MyApp({ Component, pageProps }) {
  return <>
    <ChancesProvider>
    <Component {...pageProps} />
    </ChancesProvider>
  </>
}

export default MyApp
