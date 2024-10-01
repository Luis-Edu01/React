import React from 'react'

export default function Dados(props){
    return(
        <section>
            <p>Canal: {props.Canal} </p>
            <p>Youtube: {props.Youtube}</p>
            <p>Curso: {props.Curso}</p>
        </section>
    )
}