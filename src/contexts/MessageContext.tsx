import { createContext } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from "next/router";

export const MessageContext = createContext(null);

type messageType = 'success' | 'failure';

export function MessageProvider({ children }) {

  const router = useRouter();
  
  const MySwal = withReactContent(Swal);

  function displayMessage(mode: messageType)
  {
    MySwal.fire({
        title: <h1>{mode === 'success' ? 'Parabéns!' : 'Que pena'}</h1>,
        html: <h1>{mode === 'success' ? 'Você encontrou o presente! 🥳🥳🥳' 
        : 'Dessa vez você não conseguiu encontrar o presente. 😔😔😔'}</h1>,
        showCancelButton: true,
        showConfirmButton: true,
        allowOutsideClick: false,
        confirmButtonText: 'Jogar novamente',
        cancelButtonText: 'Voltar e redefinir as regras de jogo',
      }).then((result) => {
        if (result.isConfirmed){
          router.reload();
        }
        else if(result.isDismissed)
        {
          router.replace('/');
        }
      });
  }

  return (
    <MessageContext.Provider value={{ displayMessage }}>
      {children}
    </MessageContext.Provider>
  );
}