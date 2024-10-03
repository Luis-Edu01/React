import React, {useState} from 'react'
import Numero from './components/Numero'
import './App.css'

export default function App() {

  const [num,setNum] = useState(10)

  return (
    <>
      <p>Valor do State num em App: {num}</p>
      <Numero num={num} setNum={setNum}/>
    </>
  )
}