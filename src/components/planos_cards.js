import React from 'react'

export default function Planos({ planos, setLoaded }) {

    function RenderSubtitles({subtitles}) {
        return subtitles.map((data, index)=>{
            return (
                <div key={index} ><p>{data}</p><br /></div>
            ) 
        })      
    }

    function RenderPlanos() {
        return planos.map((plano, index) => {
            
            return (
                <div key={index} id="card" className="section-space">
                    <div className="card bg-light mb-3 card-content">

                        <div className="card-header" id="card-title">{plano.card_title}</div>

                        <div className="card-body" id="card-texts">
                            
                            <RenderSubtitles subtitles={plano.card_subTitle} ></RenderSubtitles>

                            <h3 style={{ width: '75%', color: 'White', backgroundColor: '#EA5412' }} >{plano.card_price}</h3>
                            <br />
                            <button style={{ width: '100%', fontSize: '20px' }} className="btn btn-success">Assinar Agora!</button>

                        </div>

                    </div>
                </div>
            )
        })
    }

    return (
        <>
            {
                planos ?
                    (
                        <RenderPlanos></RenderPlanos>
                    )
                    :
                    (null)
            }
        </>
    )
}

