import { useState } from "react";
import DoorModel from "../models/door";
import Door from '../components/Door';

export default function Room(props)
{
    const { doorsQuantity } = props;
    const createDoors = (quantity: number, doorWithGift: number): DoorModel[] =>
    {
        //usar array.from pois essa função é um tipo de for com mapeamento, o elemento
        //não importa pois todos são undefined, o que interessa mesmo é o índice
        return Array.from({ length: doorsQuantity}, (_, i) => {
            i+=1;
            const hasGift = i === doorWithGift; 
            return new DoorModel(i, hasGift, false, false);
        });
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    const [doorsList, setDoorsList] = useState(createDoors(10, getRandomInt(1, doorsQuantity)));

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