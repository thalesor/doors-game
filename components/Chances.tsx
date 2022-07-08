import styles from "../styles/Chances.module.css";
import useChances from "../src/hooks/useChances";

export default function Chances()
{
    const { chances } = useChances();
    return (
        <h1 className={styles.Chances}>Tentativas restantes: {chances}</h1>
    )
}