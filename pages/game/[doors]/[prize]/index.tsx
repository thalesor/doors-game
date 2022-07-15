import { useEffect, useState } from "react";
import Room from "../../../../components/Room";
import { useRouter } from "next/router";
import Chances from "../../../../components/Chances";
import useChances from "../../../../src/hooks/useChances";
import useGame from "../../../../src/hooks/useGame";
import Logo from "../../../../components/Logo";
import useMessage from "../../../../src/hooks/useMessage";

export default function Game()
{
    const router = useRouter();
    const [doorsAmount, setDoorsAmount] = useState(0);
    const { chances, setChances } = useChances();
    const { gameIsReady, setGameIsRunning, setPrizedDoor } = useGame();
    const { displayMessage } = useMessage();

    useEffect(() => {
      const doors = +router?.query.doors;
      const prized = +router?.query.prize;
      setDoorsAmount(doors); 
      setPrizedDoor(prized);
    }, [router?.query])

    useEffect(() => {
       setChances(doorsAmount-1);
    }, [doorsAmount])
    
    useEffect(() => {
      if(gameIsReady && chances <= 0)
      {
        displayMessage('failure'); 
      }
   }, [chances])

   useEffect(() => {
    if(gameIsReady)
      setGameIsRunning(true);
 }, [gameIsReady])
    
    return (
      <>
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 30px'}}>
         <Logo/>
         <Chances/>
        </nav>
        <div style={{width: '100%', minHeight: '78vh', display: 'flex', justifyContent: 'center'}}>
          {doorsAmount > 0 ? <Room doorsQuantity={doorsAmount}/> 
          : 
          <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Carregando...</h1>
          </div>}
        </div>
        </>
      )
    
}