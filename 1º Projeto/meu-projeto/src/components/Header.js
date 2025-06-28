import React from 'react'
import Img1 from './imgs/img1.jpg'

export default function Header(){
    return(
        <header>
            <h1>Criando componentes</h1>
            <img src={Img1}/>
        </header>
    )
}