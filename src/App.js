import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import Nav from './components/pages/nav'

import RenderPlanos from './components/render/renderPlanos'
import RenderHome from './components/render/renderHome'
import RenderContato from './components/render/renderContato'
import RenderLogin from './components/render/renderLogin'

import SideBar from './components/sidebar/sideBar'
import './App.css';

import { BrowserView, MobileView, isMobile } from "react-device-detect";

import { useCookies } from 'react-cookie';

function App() {

  const [sideBarIsOpen, setSideBarOpen] = useState(false)
  const [isOverlayed, setOverlay] = useState(false)
  const [isLogged, setLogged] = useState(false)

  const [cookies, setCookie, removeCookie] = useCookies(['name']);

  useEffect(()=>{
    setLogged(cookies.isLogged)
  }, [cookies.isLogged])

  return (
    <div className="App">
      <Nav removeCookie={removeCookie} setLogged={setLogged} isLogged={isLogged} isMobile={isMobile} isOpen={sideBarIsOpen} setOpen={setSideBarOpen} setOverlay={setOverlay} ></Nav>
      
      <div className={ isMobile ? 'main_mobile':'main' }>

        {isOverlayed ? (<RenderLogin setLogged={setLogged} setCookie={setCookie} isOverlayed={isOverlayed} setOverlay={setOverlay} ></RenderLogin>) : null }

        <BrowserView>
          <RenderHome></RenderHome>
          <RenderPlanos></RenderPlanos>
          <RenderContato></RenderContato>
        </BrowserView>

        <MobileView>
          <SideBar isOpen={sideBarIsOpen} setOpen={setSideBarOpen}></SideBar>

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
