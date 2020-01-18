import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer id="footer">

            <button className="a1">
                <Link to="/">
                    Sobre
                </Link>
            </button>

            <button className="a1">
                <Link to="/planos">
                    Planos Mensais            
                </Link>
            </button>

            <button className="a1">   
                <Link to="/contato">
                    Fale Conosco     
                </Link>
            </button>

      </footer>
    )
}