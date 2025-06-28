import React from 'react'
import Dados from './components/Dados'

export default function Corpo(){

    const Cl =()=>{
        return('Luís Edu' )
    }
    const YT = 'Sem Sentido'  
    const CU = 'Dominhoco'
    const somar=(v1,v2)=>{
        return v1+v2
    }

    return(
        <section>
            <h2>Curso de React</h2>
            <p>O curso já está na aula 5</p>

            <>
            <Dados Canal= {Cl()}
            Youtube= {YT()} 
            Curso={CU()}
            somar={somar} />
            </>
        </section>
    )
}