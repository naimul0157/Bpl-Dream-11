
import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvialablePlayers from './components/AvialabePlayerS/AvialablePlayers';
function App() {

  const PromiseFetchPlayer = fetch('/public/palyers.json').then(res=> res.json());
  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<>Data is loading.....</>}>
       <AvialablePlayers PromiseFetchPlayer={PromiseFetchPlayer}></AvialablePlayers>
    </Suspense>
    </>
  )
}

export default App
