import styles from "../styles/Chances.module.css";
import useChances from "../src/hooks/useChances";
import useGame from "../src/hooks/useGame";

export default function Chances()
{
    const { chances } = useChances();
    const { gameIsReady } = useGame();
    
    return (
        gameIsReady && <h1 className={styles.Chances}>Remaining attempts: {chances >= 1 ? chances : <span style={{color: 'red'}}> x </span>}</h1>
    )
}