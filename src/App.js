import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './components/nav'
import Planos_Cards from './components/planos/planos_cards'
import Home from './components/home/home'
import SideBar from './components/sidebar/sideBar'
import DefaultPage from './components/defaultPage'
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

  var clss;

  if (isMobile) {
    clss = 'main_mobile' 
  }else{
    clss= 'main_mobile'
  }

  return (
    <div className="App">
      <Nav isMobile={isMobile} isOpen={isOpen} setOpen={setOpen}></Nav>
      <div className={clss}>

          <SideBar isOpen={isOpen} setOpen={setOpen}></SideBar>
          
            <Switch>

              <Route path="/contato">
                testando
              </Route>

              <Route path="/planos">
              <DefaultPage 
                  title={ <> Conheça nossos planos e  <strong> reinvente </strong> seu <strong> método </strong> de estudar! </> } 
                  subtitle={<> Planos <strong>mensais</strong> com os melhores preços para <strong>você</strong>  que precisa de uma <strong>ajudinha</strong> na hora de revisar aquele <strong>conteúdo importante</strong>. </>} 
                  comp={<Planos_Cards isMobile={isMobile} planos={planos}></Planos_Cards>} 
                ></DefaultPage>
              </Route>

              <Route path="/">
                <DefaultPage 
                  title={'Aprenda tudo sobre conteúdo jurídico em minutos'} 
                  subtitle={'Aprenda tudo sobre conteúdo jurídico em minutos. Potencialize seu ensino e aprenda 45% mais com o nosso material ilustrativo que fala a língua que seu cérebro entende.'} 
                  comp={<Home></Home>} 
                ></DefaultPage>
              </Route>

            </Switch>

      </div>
    </div>
  );
}

export default App;
