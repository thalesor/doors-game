import styles from "../styles/Door.module.css";
import DoorModel from "../models/door";

interface IDoorProps {
    value: DoorModel;
    onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: IDoorProps)
{
    const { value, onChange } = props;

    return (
            <div className={styles.outerRegion} onClick={() => onChange(value.toggleSelection())}>
                <div className={`${styles.frame} ${value.selected && styles.selected}`}>
                    {!value.open &&
                    <>
                        <div className={styles.number}>{value.number}</div>
                        <div className={styles.knob} />
                    </>
                    }   
                </div>
                <div className={styles.floor}/>
            </div>
    )
}