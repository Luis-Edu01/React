import React from 'react'
import Dados from './components/Dados'

export default function App() {

  const Cl = 'Luís Edu' 
  const YT = 'Sem Sentido'
  const CU ='Dominhoco'

  return (
      <>
        <Dados Canal= {Cl}
        Youtube= {YT} 
        Curso={CU} />
      </>
  )
}

