import React, { useState, useEffect } from 'react';
import Nav from './components/nav'
import Title from './components/title'
import Planos from './components/planos'
import './App.css';

function App() {
  const planos = [
    {
      card_title: 'Basico',
      card_subTitle: ['Acesso ilimitado a mais de 1500 esquemas mentais!', 'Suporte via WhatsApp', 'Estude Online'],
      card_price: '33,90'
    },
    {
      card_title: 'OAB',
      card_subTitle: ['Acesso ilimitado a mais de 1500 esquemas mentais!', 'Suporte via WhatsApp', 'Estude Online', 'Conteudo Exclusivo OAB'],
      card_price: '29,90'
    },
    {
      card_title: 'Entendeu',
      card_subTitle: ['Acesso ilimitado a mais de 1500 esquemas mentais!', 'Estude Offline com download de materiais!', 'Imprima para estudar onde quiser!', 'Suporte via WhatsApp'],
      card_price: '79,90'
    }
  ]

  return (
    <div className="App">
      <Nav></Nav>
      <div className="main">
        <Title></Title>
        <section id="cards">
          <Planos planos={planos}></Planos>
        </section>
      </div>
      <footer id="footer">

        <button className="a1">

          Sobre

        </button>

        <button className="a1">

          Planos

        </button>

        <button className="a1">
          
          Fale Conosco
        
        </button>

      </footer>
    </div>
  );
}

export default App;
