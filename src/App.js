import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './components/nav'
import Planos from './components/planos'
import Footer from './components/footer'
import Sobre from './components/sobre'
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
      card_subTitle: ['Acesso ilimitado a mais de 1500 esquemas mentais!', 'Estude offline com download de materiais!', 'Imprima para estudar onde quiser!', 'Suporte via WhatsApp'],
      card_price: '79,90'
    }
  ]

  return (
    <div className="App">
      <Nav></Nav>
      <div className="main">
        <Switch>

          <Route path="/sobre">
            <Sobre></Sobre>
          </Route>

          <Route path="/planos">
            <Planos planos={planos} ></Planos>
          </Route>

          <Route path="/">
            <Nav></Nav>
          </Route>

        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
