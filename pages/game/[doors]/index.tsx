import { useEffect, useState } from "react";
import Room from "../../../components/Room";
import { useRouter } from "../../../node_modules/next/router";

export default function game()
{
    const router = useRouter();
    const [doorsAmount, setDoorsAmount] = useState(0);

    useEffect(() => {
      const doors = +router?.query.doors;
      setDoorsAmount(doors); 
    }, [router?.query])

    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {doorsAmount > 0 && <Room doorsQuantity={doorsAmount}/>}
        </div>
      )
    
}