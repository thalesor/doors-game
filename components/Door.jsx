import styles from "../styles/Door.module.css";

export default function Door(props)
{
    const {number, selected} = props;

    return (
            <div className={styles.outerRegion}>
                <div className={`${styles.frame} ${selected && styles.selected}`}>
                    <div className={styles.number}>{number}</div>
                    <div className={styles.knob} />
                </div>
                <div className={styles.floor}/>
            </div>
    )
}