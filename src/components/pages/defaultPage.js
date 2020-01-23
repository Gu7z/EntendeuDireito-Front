import React from 'react'

export default function Default(props){
    return(  
        <div className = {props.class ? 'defaultMain ' + props.class : 'defaultMain'}>
                <div className = "titles">
                    <h1 id="home_title">
                        {props.title ? props.title : null}
                    </h1>
                    <p id="home_subtitle">
                        {props.subtitle ? props.subtitle : null}
                    </p>
                </div>
                {props.comp}
        </div>
    )
}