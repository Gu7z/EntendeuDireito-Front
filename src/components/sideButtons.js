import React from 'react'
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer id="footer">

            <Link className="link link_button" to="/">
                Sobre
            </Link>

            <Link className="link link_button" to="/planos">
                Planos Mensais            
            </Link>
 
            <Link className="link link_button" to="/sobre">
                Fale Conosco     
            </Link>

      </footer>
    )
}