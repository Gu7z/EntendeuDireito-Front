import React from 'react'

import Contato from '../pages/contato'
import DefaultPage from '../pages/defaultPage'

const RenderContato = () => {
    return (
        <DefaultPage
            class='background2'
            title={<strong>Fale conosco!</strong>}
            subtitle={
                <>
                    <br />
                    Gostariamos de estar mais perto de você, nosso <strong>parceiro</strong>.
                    <br />
                    <small>
                        A Entendeu preza pelo seu feedback, tudo que for falado aqui será levado
                        em consideração para melhorarmos!
                        <br />
                        <strong>Eae Entendeu direito? ;D </strong>
                    </small>
                    <br /><br />
                </>
            }
            comp={<Contato></Contato>}
        ></DefaultPage>
    )
}

export default RenderContato