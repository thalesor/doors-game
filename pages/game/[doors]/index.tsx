import { useEffect, useState } from "react";
import Room from "../../../components/Room";
import { useRouter } from "../../../node_modules/next/router";
import Chances from "../../../components/Chances";
import Logo from "../../../components/Logo";

export default function game()
{
    const router = useRouter();
    const [doorsAmount, setDoorsAmount] = useState(0);

    useEffect(() => {
      const doors = +router?.query.doors;
      setDoorsAmount(doors); 
    }, [router?.query])

    return (
      <>
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 30px'}}>
         <Logo/>
         <Chances attempts={doorsAmount-1}/>
        </nav>
        <div style={{width: '100%', minHeight: '78vh', display: 'flex', justifyContent: 'center'}}>
          {doorsAmount > 0 && <Room doorsQuantity={doorsAmount}/>}
        </div>
        </>
      )
    
}