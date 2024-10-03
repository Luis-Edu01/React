import React,{useState} from 'react'
import Imgs from './components/Imgs'
import './App.css'

export default function App() {

  const [ligado,setLigado] = useState(false)

  const cancelar=(obj)=>{
    return obj.preventDefault()
  }

  return (
    <>
      <Imgs ligado={ligado} setLigado={setLigado}/>

      <a href='https://youtube.com' target='_blank' onClick={(e)=>cancelar(e)}>Teste Link cancelado</a>
    </>
  )
}