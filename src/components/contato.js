import React from 'react'

export default function Contato() {
    return (
        <div className="form_contact">
            <form class="myform" >
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Seu Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleFormControlTextarea1">Sua Mensagem</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Seja Cordeal!" rows="3"></textarea>
                </div>
                <button className="btn" style={{background: '#EA5412', borderRadius: 15, marginBottom: 100}}>Enviar!</button>
            </form>
        </div>
    )
}