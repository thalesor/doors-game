import styles from "../styles/Door.module.css";
import DoorModel from "../models/door";
import Gift from "../components/Gift";
import useChances from "../src/hooks/useChances";
import Confetti from "react-confetti";
import useGame from "../src/hooks/useGame";

interface IDoorProps {
    value: DoorModel;
    onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: IDoorProps)
{
    const { value: door, onChange } = props;
    const { chances, setChances } = useChances();
    const { giftFound, setGiftFound } = useGame();
    const handleSelection = e => {
        onChange(door.toggleSelection());
    } 
    
    const handleOpen = e => {
        e.stopPropagation();
        onChange(door.openUp());
        if(door.hasGift)
        setGiftFound(true);
        setChances(chances-1);
    }

    const renderDoor = () =>
    {
        return (
        <>
            <div className={styles.number}>{door.number}</div>
            <div className={styles.knob} onClick={!giftFound ? handleOpen : () => {}}/>
        </>
        );
    }

    const selected = door.selected && !door.open;

    return (
            <div className={styles.outerRegion}>
                <div className={`${styles.frame} ${door.open ? styles.open : styles.closed} ${selected && styles.selected}`} 
                onClick={!giftFound ? handleSelection : () => {}}>
                    {!door.open ? renderDoor() : door.hasGift && <>
                    <Gift/>
                    <Confetti
                        width={120}
                        height={300}
                        />
                    </>}   
                </div>
                <div className={styles.floor}/>
            </div>
    )
}