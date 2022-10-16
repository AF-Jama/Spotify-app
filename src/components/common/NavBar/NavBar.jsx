import React, { Component, useState } from 'react';
import './NavBar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ActionButton from '../ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar(props){
    const [visible,setVisibility] = useState(true) // state set to true(meaning navigation is visisible)
    const outerContainerRef = React.useRef()
    const burgerRef = React.useRef()
    function onClick(event){
        event.preventDefault()
        if(visible){ // trigerred if visibility is true 
            setVisibility(false)
            console.log(burgerRef.current)
            outerContainerRef.current.style.display = 'none'
            return; 
        }
        setVisibility(true)
        outerContainerRef.current.style.display = 'block'

    }

    return (
        <nav id="outer-navigation-container" > 
            <div id='nav-links-and-button-container' ref={outerContainerRef}>
                <a href="#" className='nav-links'>Home</a>
                <a href="#" className='nav-links'>About</a>
                <a href="#" className='nav-links'>Contact</a>
                <ActionButton text = "Sign Into Your Spotify Account"/>
            </div>

            <div id="burger-btn-container" ref={burgerRef}>
                <FontAwesomeIcon icon={faBars} id="burger-btn" onClick={onClick}/>
            </div>

        </nav>
    )
}

export default NavBar;