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
    const { giftFound, setGiftFound, succesMessage } = useGame();
    const handleSelection = e => {
        onChange(door.toggleSelection());
    } 
    
    const handleOpen = e => {
        e.stopPropagation();
        onChange(door.openUp());
        if(door.hasGift)
        {
            setGiftFound(true);
            setChances(0);
            return;
        }
        setChances(chances-1);
    }

    const selected = door.selected && !door.open;

   return (
    <div className={`${styles.door} ${door.open ? styles.open : styles.closed} ${selected && styles.selected}`} 
    onClick={!giftFound ? handleSelection : () => {}}>
        <div className={styles.doorFront}>
            <div className={styles.knob} onClick={!giftFound ? handleOpen : () => {}}/>
        </div>
        <div className={`${styles.doorBack} ${door.hasGift && styles.specialRoom}`}>
            {door.hasGift 
            ? 
            <>
                <Gift width={500} height={1000} top={10} left={10} clickFn={()=> succesMessage()}/>
                {giftFound && 
                <Confetti
                    width={120}
                    height={300}
                />
                }
                
            </>
            :
            <>
                <div className={styles.rack}></div>
                <div className={styles.hat}></div>
                <div className={styles.jacket}></div>
            </>
            }
        </div>
    </div>
   )
}