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
    const { gameIsRunning, setGameIsRunning, succesMessage } = useGame();

    const handleSelection = e => {
        onChange(door.toggleSelection());
    } 
    
    const handleOpen = e => {
        e.stopPropagation();
        onChange(door.openUp());
        if(door.hasGift)
        {
            setGameIsRunning(false);
            return;
        }
        setChances(chances-1);
    }

    function renderDoor(doorObject: DoorModel)
    {
        const selected = doorObject.selected && !doorObject.open;

        return (
            <div className={`${styles.door} ${doorObject.open ? styles.open : styles.closed} ${selected && styles.selected}`} 
            onClick={gameIsRunning ? handleSelection : () => {}}>
            <div className={styles.doorFront}>
                <div className={styles.knob} onClick={gameIsRunning ? handleOpen : () => {}}/>
            </div>
            <div className={`${styles.doorBack} ${doorObject.hasGift && styles.specialRoom}`}>
                {doorObject.hasGift 
                ? 
                <>
                    <Gift width={500} height={1000} top={10} left={10} clickFn={()=> succesMessage()}/>
                    {!gameIsRunning && 
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
   return renderDoor(door);
}