import style from '../styles/Menu.module.css';
import Logo from '../components/Logo';
import { useState } from 'react';
import useGame from '../src/hooks/useGame';

export default function Home() {

  const [currentDoorsAmount, setCurrentDoorsAmount] = useState(0);
  const { sendToPage, setGameIsReady } = useGame();

  setGameIsReady(false);
  
  const handleRouting = (e) =>
  {
    e.preventDefault();
    sendToPage(`/game/${currentDoorsAmount}`);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <nav style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '0px 30px'}}>
        <Logo/>
      </nav>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <form onSubmit={(e)=> handleRouting(e)} className={style.form}>
          <div className={style.inputGroup}>
            <label>Quantas portas?</label>
            <input type="number" min={2} max={1000} value={currentDoorsAmount} onChange={(e) => setCurrentDoorsAmount(+e.target.value)}/>
          </div>
          <div className={style.inputGroup}>
            <label>Porta premiada:</label>
            <input type="number" min={1} max={currentDoorsAmount}/>
          </div>
          <input type="submit" value={'Jogar'} className={style.GameButton}/>
        </form>
      </div>
    </div>
  )
}
