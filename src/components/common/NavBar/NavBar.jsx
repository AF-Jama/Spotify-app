import React, { Component, useEffect, useState } from 'react';
import './NavBar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ActionButton from '../ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import useSpotify from '../../../customHooks/useSpotify';
import {authScopesString,BASE_URL,CLIENT_ID,CLIENT_SECRET,AUTH_URL,ACCESS_URL} from '../../../config/config.js'

function NavBar(props){
    const [visible,setVisibility] = useState(true) // state set to true(meaning navigation is visisible)
    const [token,setToken] = useState(null);
    const outerContainerRef = React.useRef()
    const burgerRef = React.useRef()

    // const {token,tokenExp} = useSpotify();

     // useEffect runs on initial render
    useEffect(()=>{
        const hash = window.location.hash;
        let accessToken;
        if(!token){
            console.log("Not present")
            try{
                accessToken = hash.split('#access_token=')[1].split('&token_type')[0];
                console.log(`Token is ${accessToken}`)
                setToken(accessToken)
                localStorage.setItem('token',accessToken);
            }catch(err){ // error block triggered, meaning split method hits error
                console.log("Initial render split error")
                return; 
            }
        }else{
            console.log(token)
            console.log("Present")
        }
    },[])
    
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

    function LoginHandler(event){
        event.preventDefault()

        window.location = `${AUTH_URL}?client_id=${CLIENT_ID}&scope=${authScopesString}&response_type=token&redirect_uri=http://localhost:3000/`
    }


    return (
        <nav id="outer-navigation-container" > 
            <div id='nav-links-and-button-container' ref={outerContainerRef}>
                <a href="#" className='nav-links'>Home</a>
                <a href="#" className='nav-links'>About</a>
                <a href="#" className='nav-links'>Contact</a>
                <ActionButton text = "Sign Into Your Spotify Account" onClick = {LoginHandler} style = {{"background-color":"black","color":"white"}}/>
            </div>


            <div id="burger-btn-container" ref={burgerRef}>
                <FontAwesomeIcon icon={faBars} id="burger-btn" onClick={onClick} color="white"/>
            </div>

        </nav>
    )
}

export default NavBar;