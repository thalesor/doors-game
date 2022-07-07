import Room from '../components/Room';

export default function Home() {

  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Room doorsQuantity={20}/>
    </div>
  )
}
