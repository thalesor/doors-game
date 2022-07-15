import { createContext } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from "next/router";
import useGame from "../hooks/useGame";

export const MessageContext = createContext(null);

type messageType = 'success' | 'failure';

export function MessageProvider({ children }) {

  const router = useRouter();
  const { resetGameConfig } = useGame(); 
  const MySwal = withReactContent(Swal);

  function displayMessage(mode: messageType)
  {
    MySwal.fire({
        title: <h1>{mode === 'success' ? 'Yaaaaaaaaaaay!' : "That's not fair!"}</h1>,
        html: <h1>{mode === 'success' ? 'You managed to find the gift! 🥳🥳🥳' 
        : "Unfortunately you weren't able to find the gift this time. 😔😔😔"}</h1>,
        showCancelButton: true,
        showConfirmButton: true,
        allowOutsideClick: false,
        confirmButtonText: 'Play again',
        cancelButtonText: 'Back to game rules screen',
      }).then((result) => {
        if (result.isConfirmed){
          router.reload();
        }
        else if(result.isDismissed)
        {
          resetGameConfig();
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