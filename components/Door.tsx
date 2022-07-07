import styles from "../styles/Door.module.css";
import DoorModel from "../models/door";

interface IDoorProps {
    door: DoorModel;
}

export default function Door(props: IDoorProps)
{
    const { door } = props;

    return (
            <div className={styles.outerRegion}>
                <div className={`${styles.frame} ${door.selected && styles.selected}`}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.knob} />
                </div>
                <div className={styles.floor}/>
            </div>
    )
}