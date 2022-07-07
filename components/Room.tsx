import { useState } from "react";
import DoorModel from "../models/door";
import Door from '../components/Door';

export default function Room()
{
    const createDoors = (quantity: number, selectedDoor: number): DoorModel[] =>
    {
        //usar array.from pois essa função é um tipo de for com mapeamento, o elemento
        //não importa pois todos são undefined, o que interessa mesmo é o índice
        return Array.from({ length: quantity}, (_, i) => {
            i+=1;
            const hasGift = i === selectedDoor; 
            return new DoorModel(i, hasGift, false, false);
        });
    }

    const [doorsList, setDoorsList] = useState(createDoors(10, 5));

    const updateDoors = (doors: DoorModel[], toUpdate: DoorModel): DoorModel[] =>
    {
        return doors.map(door => {
            if(door.number === toUpdate.number)
            return toUpdate;

            return door;
        });
    }

    const renderDoors = () =>
    {
        return doorsList?.map(door => <Door value={door} onChange={newDoor => {setDoorsList(updateDoors(doorsList, newDoor))}}/>)
    }

    return (
        <div style={{display: 'flex'}}>
            {renderDoors()}
        </div>
    )
}