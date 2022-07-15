import style from '../styles/Menu.module.css';
import Logo from '../components/Logo';
import { useEffect, useState } from 'react';
import useGame from '../src/hooks/useGame';
import { useRouter } from 'next/router';

export default function Home() {

  const [currentDoorsAmount, setCurrentDoorsAmount] = useState(0);
  const { setPrizedDoor, prizedDoor, resetGameConfig } = useGame();
  const router = useRouter();

  useEffect(() => 
    setPrizedDoor(null)
  , []);

  const handleRouting = (e) =>
  {
    e.preventDefault();
    router.replace(`/game/${currentDoorsAmount}/${prizedDoor || 'random'}`);
  }

  const handleChangePrizedDoor = (e) =>
  {
    setPrizedDoor(+e.target.value);
  }
 
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <nav style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '0px 30px'}}>
        <Logo/>
      </nav> 
      <br/>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <form onSubmit={(e)=> handleRouting(e)} className={style.form}>
          <div className={style.inputGroup}>
            <label>Quantas portas?</label>
            <input type="number" min={2} max={1000} value={currentDoorsAmount} onChange={(e) => setCurrentDoorsAmount(+e.target.value)}/>
          </div>
          <div className={style.inputGroup}>
            <label>Porta premiada:</label>
            <input type="number" placeholder='a máquina decide' value={prizedDoor} min={1} max={currentDoorsAmount} onChange={(e) => handleChangePrizedDoor(e)}/>
          </div>
          <input type="submit" value={'Jogar'} className={style.GameButton}/>
        </form>
      </div>
    </div>
  )
}
