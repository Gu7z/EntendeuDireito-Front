import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './components/nav'
import Planos from './components/planos'
import Footer from './components/sideButtons'
import Sobre from './components/sobre'
import SideBar from './components/sideBar'
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

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="App">
      <Nav isOpen={isOpen} setOpen={setOpen}></Nav>
      <SideBar isOpen={isOpen} setOpen={setOpen}></SideBar>
      <div className="main">
        <Switch>

          <Route path="/sobre">
            <Sobre></Sobre>
          </Route>

          <Route path="/planos">
            <Planos planos={planos} ></Planos>
          </Route>

          <Route path="/">
            testando
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
