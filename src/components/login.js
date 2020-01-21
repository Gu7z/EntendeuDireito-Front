import React, { useState, useEffect, createRef } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

export default function Login({ isOverlayed, setOverlay }) {


    function handleSubmit(e) {
        setOverlay(false)
        return true
    }

    const [isLoginScreen, setLoginScreen] = useState(true)

    const RenderLog = () => {
        return (
            <form onSubmit={handleSubmit} >
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <br />
                <button class="btn" style={{ background: '#EA5412', color: 'white', marginBottom: '20px' }}>Entrar</button>
            </form>
        )
    }

    const RenderCad = () => {
        return (
            <form onSubmit={handleSubmit} >
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <br />
                <button class="btn" style={{ background: '#EA5412', color: 'white', marginBottom: '20px' }}>Entrar</button>
            </form>
        )
    }

    return (

        <div>
            {isOverlayed ? (
                <div id="overlay">
                    <OutsideClickHandler onOutsideClick={()=>{setOverlay(false)}}>
                        <div id="logCad">
                            <div id="topLogCad" >
                                <div id="topLogin" onClick={() => setLoginScreen(!isLoginScreen)}>Login</div>
                                <div id="topCad" onClick={() => setLoginScreen(!isLoginScreen)}>Cadastrar</div>
                            </div>
                            {
                                isLoginScreen ?
                                    (
                                        <>
                                            <h3> <strong>Logar</strong> </h3>
                                            <RenderLog></RenderLog>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <h3> <strong>Cadastrar</strong> </h3>
                                            <RenderCad></RenderCad>
                                        </>
                                    )
                            }
                        </div>
                    </OutsideClickHandler>
                </div>
            ) : null}
        </div>
    )
}