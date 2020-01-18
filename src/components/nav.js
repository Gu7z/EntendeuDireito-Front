import React from 'react'
import logo from './img/logo.png'

export default function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div id="logo" href="/">
                <img  id="logo_img" src={logo} />
            </div>

            <button className="btn btn-login my-2 my-sm-0" type="submit">Login</button>
        </nav>
    )
}