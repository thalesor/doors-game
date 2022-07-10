import { createContext, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from "next/router";

export const GameContext = createContext(null);


export function GameProvider({ children }) {
  const [gameIsReady, setGameIsReady] = useState(false);
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [prizedDoor, setPrizedDoor] = useState(null);

  const router = useRouter();
  function loadGame()
  {
    router.reload();
  }
  
  const MySwal = withReactContent(Swal);

  function sendToPage(page)
  {
    router.replace(page);
  }

  function succesMessage()
  {
    MySwal.fire({
      title: <h1>Parabéns!</h1>,
      html: <h1>Você encontrou o presente! 🥳🥳🥳</h1>,
      showCancelButton: true,
      showConfirmButton: true,
      allowOutsideClick: false,
      confirmButtonText: 'Jogar novamente',
      cancelButtonText: 'Voltar e redefinir as regras de jogo',
    }).then((result) => {
      if (result.isConfirmed){
        loadGame()
      }
      else if(result.isDismissed)
      {
        sendToPage('/');
      }
    });
  }

  function failMessage()
  {
    MySwal.fire({
      title: <h1>Que pena!</h1>,
      html: <h1>Dessa vez você não conseguiu encontrar o presente. 😔😔😔</h1>,
      showCancelButton: true,
      showConfirmButton: true,
      allowOutsideClick: false,
      confirmButtonText: 'Tentar novamente',
      cancelButtonText: 'Voltar e redefinir as regras de jogo',
    }).then((result) => {
      if (result.isConfirmed){
        loadGame()
      }
      else if(result.isDismissed)
      {
        sendToPage('/')
      }
    });
  }

  return (
    <GameContext.Provider value={{ gameIsReady, setGameIsReady, succesMessage, failMessage, gameIsRunning, setGameIsRunning, sendToPage, prizedDoor, setPrizedDoor }}>
      {children}
    </GameContext.Provider>
  );
}