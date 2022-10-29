import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import './Header.css'

function Header(props){



    return (
        <header id='header-outer-container'>
            <div id="logo-container">
                <a href="#" style={{color:"white"}}>My Spotify Stats</a>
            </div>

            <NavBar/>
        </header>
    )
}
export default Header;