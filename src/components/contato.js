import React from 'react'

export default function Contato() {
    return (
        <div class="form_contact">
            <form >
                <div class="form-group">
                    <label for="exampleFormControlInput1">Seu Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group" >
                    <label for="exampleFormControlTextarea1">Sua Mensagem</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Seja Cordeal!" rows="3"></textarea>
                </div>
                <button class="btn" style={{background: '#EA5412', borderRadius: 15}}>Enviar!</button>
            </form>
        </div>
    )
}