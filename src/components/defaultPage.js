import React from 'react'
import FadeIn from 'react-fade-in'

export default function Default(props){
    return(
        <FadeIn>
            <div className = "defaultMain">
                <div className = "titles">
                    <h1 id="home_title">
                        {props.title}
                    </h1>
                    <p id="home_subtitle">
                        {props.subtitle}
                    </p>
                </div>
                {props.comp}
            </div>
        </FadeIn>
    )
}