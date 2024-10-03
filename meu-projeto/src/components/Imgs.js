import React from 'react'
import Img1 from './imgs/img1.jpg'
import Img2 from './imgs/img2.jpg'

export default function Imgs(props) {


  return (
    <>
      <img style={{width:'500px'}} src={props.ligado?Img1:Img2}/>
      <button onClick={()=>props.setLigado(!props.ligado)} >{props.ligado?'Desligar':'Ligar'}</button>
    </>
  )
}