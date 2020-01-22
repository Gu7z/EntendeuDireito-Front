import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import FadeIn from 'react-fade-in'

export default function Login({ isOverlayed, setOverlay }) {

    //Nao posso usar o usestate por causa do overlay aparentemente
    const form_Values = {
        email: '', password: ''
    }

    const change_values = (e) => {
        form_Values[e.currentTarget.type] = e.target.value
    }

    function handleSubmit(e) {
        const isValid = () => {
            if (form_Values.password.length > 7) {
                return true
            } else {
                return false
            }
        }
        e.preventDefault()
        if (isValid()) {
            alert('valida')
        } else {
            alert('A senha é curta de mais')
        }
    }

    const [isLoginScreen, setLoginScreen] = useState(true)

    const RenderLog = () => {
        return (
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" onChange={change_values} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" onChange={change_values} className="form-control" id="exampleInputPassword1" />
                </div>
                <br />
                <button className="btn" style={{ background: '#EA5412', color: 'white', marginBottom: '20px' }}>Entrar</button>
            </form>
        )
    }

    const RenderCad = () => {
        return (
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                    <small>A senha deve ter no minimo 8 digitos</small>
                </div>
                <button className="btn" style={{ background: '#EA5412', color: 'white', marginBottom: '20px' }}>Entrar</button>
            </form>
        )
    }

    return (

        <div>
            {isOverlayed ? (
                <div id="overlay">
                    <OutsideClickHandler onOutsideClick={() => { setOverlay(false) }}>
                        <FadeIn>
                            <div id="logCad">
                                <div id="topLogCad" >
                                    <div id="topLogin" onClick={() => setLoginScreen(true)}>Login</div>
                                    <div id="topCad" onClick={() => setLoginScreen(false)}>Cadastrar</div>
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
                        </FadeIn>
                    </OutsideClickHandler>
                </div>
            ) : null}
        </div>
    )
}