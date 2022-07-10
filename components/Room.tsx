import { useEffect, useState } from "react";
import useGame from "../src/hooks/useGame";
import DoorModel from "../models/door";
import Door from '../components/Door';
import { getRandomIntFromMinAndMax } from "../utils/functions";

export default function Room({doorsQuantity})
{
    const { setGameIsReady } = useGame();

    const createDoors = (doorWithGift: number): DoorModel[] =>
    {
        //usar array.from pois essa função é um tipo de for com mapeamento, o elemento
        //não importa pois todos são undefined, o que interessa mesmo é o índice
        return Array.from({ length: doorsQuantity}, (_, i) => {
            i+=1;
            const hasGift = i === doorWithGift; 
            return new DoorModel(i, hasGift, false, false);
        });
    }

    const [doorsList, setDoorsList] = useState(createDoors(getRandomIntFromMinAndMax(1, doorsQuantity)));
    
    useEffect(() => {
        if(doorsList)
        setGameIsReady(true);
    }, [doorsList]);

    const updateDoors = (doors: DoorModel[], toUpdate: DoorModel): DoorModel[] =>
    {
        return doors.map(door => {
            if(door.number === toUpdate.number)
            return toUpdate;

            return door.open ? door : door.unselect();
        });
    }

    const renderDoors = () =>
    {
        return doorsList?.map((door, i) => <Door key={i} value={door} onChange={newDoor => {setDoorsList(updateDoors(doorsList, newDoor))}}/>)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px 0px', gap: 50, flexWrap: 'wrap'}}>
            {renderDoors()}
        </div>
    )
}