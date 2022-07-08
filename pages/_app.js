import '../styles/globals.css'
import { ChancesProvider } from '../src/contexts/ChancesContext';
import { GameProvider } from '../src/contexts/GameContext';

function MyApp({ Component, pageProps }) {
  return <>
  <GameProvider>
  <ChancesProvider>
    <Component {...pageProps} />
  </ChancesProvider>
  </GameProvider>
  </>
}

export default MyApp
