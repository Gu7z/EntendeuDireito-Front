import React from 'react'
import Title from './title'
import Planos_Cards from './planos_cards'
import FadeIn from 'react-fade-in';

export default function Planos({planos}){
    return(
        <>
            <FadeIn>
                <Title></Title>
                <section id="cards">
                    <Planos_Cards planos={planos}></Planos_Cards>
                </section>
            </FadeIn>
        </>
    )
}