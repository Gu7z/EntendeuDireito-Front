import React from 'react'

import Home from '../pages/home'
import DefaultPage from '../pages/defaultPage'

const RenderHome = () => {
    return (
        <DefaultPage
            title={'Aprenda tudo sobre conteúdo jurídico em minutos'}
            subtitle={'Aprenda tudo sobre conteúdo jurídico em minutos. Potencialize seu ensino e aprenda 45% mais com o nosso material ilustrativo que fala a língua que seu cérebro entende.'}
            comp={<Home></Home>}
        ></DefaultPage>
    )
}

export default RenderHome