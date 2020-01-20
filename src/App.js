import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './components/nav'
import Planos from './components/planos/planos'
import Home from './components/home/home'
import SideBar from './components/sidebar/sideBar'
import './App.css';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

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
      <Nav isMobile={isMobile} isOpen={isOpen} setOpen={setOpen}></Nav>
      <div className="main">
        <BrowserView>
            <Home></Home>
            <Planos planos={planos} ></Planos>
        </BrowserView>

        <MobileView>
          <SideBar isOpen={isOpen} setOpen={setOpen}></SideBar>
          
            <Switch>

              <Route path="/contato">
                testando
              </Route>

              <Route path="/planos">
                <Planos planos={planos} ></Planos>
              </Route>

              <Route path="/">
                  <Home></Home>
              </Route>

            </Switch>
        </MobileView>
      </div>
    </div>
  );
}

export default App;
