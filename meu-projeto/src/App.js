import React from 'react'
import './App.css'
import Img1 from './components/imgs/img1.jpg'

export default function App() {
  const nome = () => {
    return('Luís Edu')
  }
  function curso(){
    return 'Curso de React'
  }
  return (
    <section>
      <reader>
        <p>{'Nome: ' + nome()}</p>
        <p>{curso()}</p>
      </reader>
      <section>
      <img src={Img1}/>
      </section>
    </section>
  )
}

