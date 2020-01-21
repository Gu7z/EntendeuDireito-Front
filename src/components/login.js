import React, { useState, useEffect } from 'react'

export default function Login({ isOverlayed, setOverlay }) {

    function handleSubmit(e){
        setOverlay(false)
        return true
    }

    return (

        <div>
            {isOverlayed ? (
                <div style={{
                    position: "fixed",
                    width: '100vw',
                    height: '100vh',
                    top: 0, left: 0,
                    bottom: 0,
                    right: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onClick={() => {return}} >

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 350,
                        height: 350,
                        background: 'white',
                        borderRadius: 15,
                        color: 'black',
                    }} >
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            justifyContent: 'space-around', 
                            alignItems: 'center',
                            background: '#d3d3d3', 
                            height: '100%',
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15
                        }} >
                            <div>Login</div>
                            <div>Cadastrar</div>
                        </div>
                        <h3 style={{ paddingTop: '10px' }} > <strong style={{ color: 'black' }} >Logar</strong> </h3>
                        <form style={{padding: '2% 10%'}} onSubmit={handleSubmit} >
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Senha</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <br/>
                            <button  class="btn" style={{background: '#EA5412', color: 'white', marginBottom: '20px'}}>Entrar</button>
                        </form>
                    </div>

                </div>
            ) : null}
        </div>
    )
}