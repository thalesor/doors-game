import { useEffect, useState } from "react";
import Room from "../../../components/Room";
import { useRouter } from "next/router";
import Chances from "../../../components/Chances";
import useChances from "../../../src/hooks/useChances";
import useGame from "../../../src/hooks/useGame";
import Logo from "../../../components/Logo";

export default function game()
{
    const router = useRouter();
    const [doorsAmount, setDoorsAmount] = useState(0);
    const { chances, setChances } = useChances();
    const { foundGift, failMessage, finishedLoading } = useGame();

    useEffect(() => {
      const doors = +router?.query.doors;
      setDoorsAmount(doors); 
    }, [router?.query])

    useEffect(() => {
       setChances(doorsAmount-1);
    }, [doorsAmount])

    useEffect(() => {
      if(chances <= 0 && finishedLoading)
      {
        if(!foundGift)
          failMessage(); 
      }
   }, [chances])
    
    return (
      <>
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 30px'}}>
         <Logo/>
         <Chances/>
        </nav>
        <div style={{width: '100%', minHeight: '78vh', display: 'flex', justifyContent: 'center'}}>
          {doorsAmount > 0 && <Room doorsQuantity={doorsAmount}/>}
        </div>
        </>
      )
    
}