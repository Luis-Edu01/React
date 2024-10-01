import React from 'react'

export default function Dados(props){
    let n1 = 10
    let n2 = 30

    return(
        <section>
            <p>Canal: {props.Canal} </p>
            <p>Youtube: {props.Youtube}</p>
            <p>Curso: {props.Curso}</p>
            <p>{'A soma de ' +n1+ ' com ' +n2+ ' é igual a '+ props.somar(n1,n2)}</p>
        </section>
    )
}