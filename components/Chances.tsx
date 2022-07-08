import styles from "../styles/Chances.module.css";

export default function Chances({attempts})
{
    return (
        <h1 className={styles.Chances}>Tentativas restantes: {attempts}</h1>
    )
}