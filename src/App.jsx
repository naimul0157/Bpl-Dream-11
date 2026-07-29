
import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvialablePlayers from './components/AvialabePlayerS/AvialablePlayers';
import Toggle from './components/Toggle/Toggle';
import Selected from './components/SelectedPlayer/Selected';
const PromiseFetchPlayer = fetch('/public/palyers.json').then(res=> res.json());
function App() {
  const [toggle, setToggle] = useState(true);
  const[avilableBalance, setAvialableBalance] = useState(10000000);
  const [countSelect, setCountSelect] = useState(0);
  return (
    <>
    <Navbar avilableBalance={avilableBalance}></Navbar>
    <Toggle setToggle={setToggle} toggle={toggle} countSelect={countSelect}></Toggle>
    {
      toggle === true ? 
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <AvialablePlayers PromiseFetchPlayer={PromiseFetchPlayer} setAvialableBalance={setAvialableBalance}
       avilableBalance={avilableBalance} countSelect={countSelect} setCountSelect={setCountSelect}></AvialablePlayers>
    </Suspense> : <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><Selected></Selected></Suspense>
    }
    </>
  )
}

export default App
