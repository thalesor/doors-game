import Head from 'next/head'
import Image from 'next/image'
import Gift from '../components/Gift';
import Door from '../components/Door';
import DoorModel from '../models/door';
import { useState } from 'react';

export default function Home() {

  const [d1, setD1] = useState(new DoorModel(1));
  const [d2, setD2] = useState(new DoorModel(2, false, true, false)); 
  const [d3, setD3] = useState(new DoorModel(3, false, false, true));

  return (
    <div style={{display: 'flex', gap: '20px'}}>
        <Door value={d1} onChange={newDoor => setD1(newDoor)}/>
        <Door value={d2} onChange={newDoor => console.log(newDoor)}/>
        <Door value={d3} onChange={newDoor => console.log(newDoor)}/>
    </div>
  )
}
