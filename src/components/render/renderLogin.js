import React from 'react'

import Login from '../pages/login'
import DefaultPage from '../pages/defaultPage'

const RenderLogin = ({ setLogged, setCookie, isOverlayed, setOverlay }) => {
    return(
      <DefaultPage
        class='Login'
        comp={ <Login setLogged={setLogged} setCookie={setCookie} isOverlayed={isOverlayed} setOverlay={setOverlay} ></Login> }
      ></DefaultPage>
    )
  }

export default RenderLogin