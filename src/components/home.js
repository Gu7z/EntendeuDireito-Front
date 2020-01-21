import React from 'react'
import computador from './img/computador.png'
import lupa from './img/lupa.png'

export default function Home() {
    return (
        <div>
            <div id="apresentation">
                <div class="ap_content">
                    <h1>Entrega de Valor</h1>
                    <img alt='' id="logo_img" src={computador} style={{ maxWidth: '200px' }} />
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                </div>

                <div class="ap_content">
                    <h1>Reconhecimento Social</h1>
                    <img alt='' id="logo_img" src={lupa} style={{ maxWidth: '150px' }} />
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                </div>
            </div>

            <button type="button" class="btn btn-success" style={{width: '33%', height:'75px', marginBottom: '20px'}}>Começar agora</button>
        </div>
    )
}