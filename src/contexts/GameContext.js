import { createContext, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Router from "next/router";

export const GameContext = createContext(null);


export function GameProvider({ children }) {
  const [giftFound, setGiftFound] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);

  function loadGame()
  {
    Router.reload(window.location.pathname)
  }
  
  const MySwal = withReactContent(Swal);

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
        alert('sabe sim')
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
        alert('sabe sim')
      }
    });
  }

  return (
    <GameContext.Provider value={{ finishedLoading, setFinishedLoading, giftFound, setGiftFound, succesMessage, failMessage }}>
      {children}
    </GameContext.Provider>
  );
}