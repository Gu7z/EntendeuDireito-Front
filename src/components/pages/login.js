import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import FadeIn from 'react-fade-in'
import axios from 'axios'
import { useAlert } from "react-alert";

export default function Login({ setCookie, setLogged, isOverlayed, setOverlay }) {

    //Nao posso usar o usestate por causa do overlay
    const form_Values = {
        email: '', password: ''
    }

    const change_values = (e) => {
        form_Values[e.currentTarget.type] = e.target.value
    }

    const alert = useAlert()

    function handleResponse(code, token) {

        if (code === 401) {
            alert.error('Dados Invalidos')
        } else if (code === 403) {
            alert.error('Nao confirmou o email')
        } else if (code === 404) {
            alert.error('Nao Cadastrado')
        } else if (code === 409) {
            alert.error('Usuario ja existe')
        } else if (code === 401) {
            alert.error('Credenciais Invalidas')
        } else if (code === 502) {
            alert.error('Nao Foi possivel enviar o email, entre em contato!')
        } else if (code === 200) {
            setCookie('token', token)
            setCookie('isLogged', true)
            setLogged(true)
            alert.success('Logado')
            setOverlay(false)
        }else if (code === 666) {
            alert.success('Email enviado')
            setLoginScreen(true)
        }

    }

    function handleSubmit(e) {
        e.preventDefault()
        if (e.target.id == 'formLog') {
            axios.post('https://entendeuback.herokuapp.com/auth', {}, {
                auth: {
                    username: form_Values.email,
                    password: form_Values.password
                }
            }).then(
                response => handleResponse(200, response.data)
            ).catch(
                err => {
                    handleResponse(err.response.status)
                }
            )
        } else {
            axios.post('https://entendeuback.herokuapp.com/create', {}, {
                auth: {
                    username: form_Values.email,
                    password: form_Values.password
                }
            }).then(
                //666 - codigo para email enviado
                () => handleResponse(666)
            ).catch(
                err => {
                    console.log(err)
                    handleResponse(err.response.status)
                }
            )
        }
    }

    const [isLoginScreen, setLoginScreen] = useState(true)

    const RenderLog = () => {
        return (
            <form id="formLog" onSubmit={handleSubmit} >
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
            <form id="formCad" onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" onChange={change_values} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" onChange={change_values} className="form-control" id="exampleInputPassword1" />
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