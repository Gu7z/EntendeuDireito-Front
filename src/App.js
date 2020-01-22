import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import Nav from './components/nav'

import DefaultPage from './components/defaultPage'

import PlanosCards from './components/planos_cards'
import Home from './components/home'
import Contato from './components/contato'
import Login from './components/login'

import SideBar from './components/sidebar/sideBar'
import './App.css';

import {
  BrowserView,
  MobileView,
  isMobile
} from "react-device-detect";

import { useCookies } from 'react-cookie';

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
  const [isOverlayed, setOverlay] = useState(false)

  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const [isLogged, setLogged] = useState()

  useEffect(()=>{
    setLogged(cookies.isLogged)
  }, [cookies.isLogged])

  var clss;

  if (isMobile) {
    clss = 'main_mobile'
  } else {
    clss = 'main'
  }

  const RenderHome = () => {
    return (
      <DefaultPage
        title={'Aprenda tudo sobre conteúdo jurídico em minutos'}
        subtitle={'Aprenda tudo sobre conteúdo jurídico em minutos. Potencialize seu ensino e aprenda 45% mais com o nosso material ilustrativo que fala a língua que seu cérebro entende.'}
        comp={<Home></Home>}
      ></DefaultPage>
    )
  }

  const RenderPlanos = () => {
    return (
      <DefaultPage
        title={
          <>
            Conheça nossos planos e  <strong> reinvente </strong> seu <strong> método </strong> de estudar!
          </>
        }
        subtitle={
          <>
            Planos <strong>mensais </strong>
            com os melhores preços para <strong>você </strong>
            que precisa de uma <strong>ajudinha </strong> na hora de revisar aquele
            <strong> conteúdo importante</strong>.
          </>
        }
        comp={<PlanosCards isMobile={isMobile} planos={planos}></PlanosCards>
        }
      ></DefaultPage>
    )
  }

  const RenderContato = () => {
    return (
      <DefaultPage
        class='background2'
        title={<strong>Fale conosco!</strong>}
        subtitle={
          <>
            <br />Gostariamos de estar mais perto de você, nosso <strong>parceiro</strong>.
            <br />
            <small>
              A Entendeu preza pelo seu feedback, tudo que for falado aqui será levado
              em consideração para melhorarmos!
              <br />
              <strong>Eae Entendeu direito? ;D </strong>
            </small>
            <br /><br />
          </>
        }
        comp={<Contato></Contato>}
      ></DefaultPage>
    )
  }

  const RenderLogin = () => {
    return(
      <DefaultPage
        class='Login'
        comp={ <Login setLogged={setLogged} setCookie={setCookie} isOverlayed={isOverlayed} setOverlay={setOverlay} ></Login> }
      ></DefaultPage>
    )
  }

  return (
    <div className="App">
      <Nav removeCookie={removeCookie} setLogged={setLogged} isLogged={isLogged} isMobile={isMobile} isOpen={isOpen} setOpen={setOpen} setOverlay={setOverlay} ></Nav>
      <div className={clss}>

        <BrowserView>
          <RenderHome></RenderHome>
          <RenderPlanos></RenderPlanos>
          <RenderContato></RenderContato>
          {isOverlayed ? (<RenderLogin></RenderLogin>) : null }
        </BrowserView>

        <MobileView>
          <SideBar isOpen={isOpen} setOpen={setOpen}></SideBar>

          {isOverlayed ? (<RenderLogin></RenderLogin>) : null }

          <Switch>

            <Route path="/contato">
              <RenderContato></RenderContato>
            </Route>

            <Route path="/planos">
              <RenderPlanos></RenderPlanos>
            </Route>

            <Route path="/">
              <RenderHome></RenderHome>
            </Route>

          </Switch>

        </MobileView>

      </div>
    </div>
  );
}

export default App;
