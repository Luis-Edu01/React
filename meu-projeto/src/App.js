import React,{useState} from 'react'
import Img1 from './components/imgs/img1.jpg'
import Img2 from './components/imgs/img2.jpg'
import './App.css'

export default function App() {

  const [ligado,setLigado]=useState(false)

  return (
    <>
      <img style={{width:'500px'}} src={ligado?Img1:Img2}/>
      <button onClick={()=>setLigado(!ligado)} >{ligado?'Desligar':'Ligar'}</button>
    </>
  )
}