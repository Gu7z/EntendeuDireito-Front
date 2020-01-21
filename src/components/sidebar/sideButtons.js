import React from 'react'
import { Link } from "react-router-dom";

export default function Footer({setOpen}){
    return(
        <footer onClick={()=>setOpen(false)} id="sideButton">

            <Link className="link link_button" to="/">
                Sobre
            </Link>

            <Link className="link link_button" to="/planos">
                Planos Mensais            
            </Link>
 
            <Link className="link link_button" to="/contato">
                Fale Conosco     
            </Link>

      </footer>
    )
}