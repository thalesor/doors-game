import '../styles/globals.css'
import { ChancesProvider } from '../src/contexts/ChancesContext';
import { GameProvider } from '../src/contexts/GameContext';
import { MessageProvider } from '../src/contexts/MessageContext';

function MyApp({ Component, pageProps }) {
  return <>
  <MessageProvider>
  <GameProvider>
  <ChancesProvider>
    <Component {...pageProps} />
  </ChancesProvider>
  </GameProvider>
  </MessageProvider>
  </>
}

export default MyApp;
