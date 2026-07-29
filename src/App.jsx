
import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvialablePlayers from './components/AvialabePlayerS/AvialablePlayers';
import Toggle from './components/Toggle/Toggle';
import Selected from './components/SelectedPlayer/Selected';
function App() {
  const [toggle, setToggle] = useState(true);
  const PromiseFetchPlayer = fetch('/public/palyers.json').then(res=> res.json());
  return (
    <>
    <Navbar></Navbar>
    <Toggle setToggle={setToggle} toggle={toggle}></Toggle>
    {
      toggle === true ? 
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <AvialablePlayers PromiseFetchPlayer={PromiseFetchPlayer}></AvialablePlayers>
    </Suspense> : <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><Selected></Selected></Suspense>
    }
    </>
  )
}

export default App
