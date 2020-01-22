import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import FadeIn from 'react-fade-in'
import axios from 'axios'

export default function Login({ isOverlayed, setOverlay }) {

    //Nao posso usar o usestate por causa do overlay aparentemente
    const form_Values = {
        email: '', password: ''
    }

    const change_values = (e) => {
        form_Values[e.currentTarget.type] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(e.target.id == 'formLog'){
            axios.post('http://localhost:3001/auth', {}, {
                auth: {
                    username: form_Values.email,
                    password: form_Values.password
                }
            }).then(
                response=>console.log(response.data)
            ).catch(
                err=>{
                    console.log(err.response.status)
                    if(err.response.status === 401){
                        console.log('Senha incorreta')
                    }else if(err.response.status === 403){
                        console.log('Nao confirmou o email')
                    }else if(err.response.status === 404){
                        console.log('Nao Cadastrado')
                    }
                }
            )
        }else{
            axios.post('http://localhost:3001/create', {}, {
                auth: {
                    username: form_Values.email,
                    password: form_Values.password
                }
            }).then(
                data=>console.log(data)
            ).catch(
                err=>{
                    console.log(err.response.status)
                    if(err.response.status === 409){
                        console.log('Usuario ja existe')
                    }else if(err.response.status === 401){
                        console.log('Credenciais Invalidas')
                    }else if(err.response.status === 502){
                        console.log('Nao Foi possivel enviar o email, entre em contato!')
                    }
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