import React from 'react'
import logo from './img/logo.png'
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

export default function Nav({ isOpen, setOpen, isMobile, setOverlay }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div id="logo" href="/">
                <img alt='' id="logo_img" src={logo} >

                </img>
            </div>

            <Link className="link" to='/login' onClick={()=>setOverlay(true)} >
                <div className="button" style={{ color: 'black', display: 'flex', flexDirection: 'row' }}>
                    <div>Login</div>
                    <PersonIcon style={{ color: '#EA5412' }} textAnchor='Login'></PersonIcon>
                </div>
            </Link>

            {isMobile ?
                (
                    <div className="button" onClick={() => { setOpen(!isOpen) }} style={{ color: 'black', display: 'flex', flexDirection: 'row' }}>
                        <div>Menu</div>
                        <MenuIcon style={{ color: '#EA5412' }} textAnchor='Login'></MenuIcon>
                    </div>
                ) : (null)
            }

        </nav>
    )
}