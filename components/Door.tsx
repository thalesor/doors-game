import styles from "../styles/Door.module.css";
import DoorModel from "../models/door";
import Gift from "../components/Gift";

interface IDoorProps {
    value: DoorModel;
    onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: IDoorProps)
{
    const { value: door, onChange } = props;

    const handleSelection = e => {
        onChange(door.toggleSelection());
    } 
    
    const handleOpen = e => {
        e.stopPropagation();
        onChange(door.openUp());
    }

    const renderDoor = () =>
    {
        return (
        <>
            <div className={styles.number}>{door.number}</div>
            <div className={styles.knob} onClick={handleOpen}/>
        </>
        );
    }

    const selected = door.selected && !door.open;

    return (
            <div className={styles.outerRegion}>
                <div className={`${styles.frame} ${door.open ? styles.open : styles.closed} ${selected && styles.selected}`} 
                onClick={handleSelection}>
                    {!door.open ? renderDoor() : door.hasGift && <Gift/>}   
                </div>
                <div className={styles.floor}/>
            </div>
    )
}