import React from 'react'
import Title from './title'
import Planos_Cards from './planos_cards'

export default function Planos({planos}){
    return(
        <>
            <Title></Title>
            <section id="cards">
            <Planos_Cards planos={planos}></Planos_Cards>
            </section>
        </>
    )
}