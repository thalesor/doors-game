import Head from 'next/head'
import Image from 'next/image'
import Gift from '../components/Gift';
import Door from '../components/Door';

export default function Home() {
  return (
    <div style={{display: 'flex', gap: '20px'}}>
        <Door number={3}/>
        <Door number={3}/>
        <Door number={3} selected/>
        <Door number={3}/>
        <Door number={3}/>
    </div>
  )
}
