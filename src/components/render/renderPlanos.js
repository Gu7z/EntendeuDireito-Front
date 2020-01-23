import React from 'react'

import PlanosCards from '../pages/planos_cards'
import DefaultPage from '../pages/defaultPage'

import PlanosJson from '../../utils/planos'

import { isMobile } from "react-device-detect";

const RenderPlanos = () => {
    return (
      <DefaultPage
        title={
          <>
            Conheça nossos planos e  <strong> reinvente </strong> seu <strong> método </strong> de estudar!
          </>
        }
        subtitle={
          <>
            Planos <strong>mensais </strong>
            com os melhores preços para <strong>você </strong>
            que precisa de uma <strong>ajudinha </strong> na hora de revisar aquele
            <strong> conteúdo importante</strong>.
          </>
        }
        comp={<PlanosCards isMobile={isMobile} planos={PlanosJson}></PlanosCards>
        }
      ></DefaultPage>
    )
  }

export default RenderPlanos