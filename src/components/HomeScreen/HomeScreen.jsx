import React,{Component,useState,useEffect,useContext} from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"
import SpotifyLogo from '../../assets/spotify-logo.jpeg'
import authContext from "../../contexts/AuthContext/AuthContext"
import useLoggedIn from "../../customHooks/useLoggedIn"
import './HomeScreen.css'
import { createRoutesFromElements,Navigate } from "react-router-dom"
import useSpotify from "../../customHooks/useSpotify"

function HomeScreen(props){
    // const [token, setToken] = useState(null); // token state
    // const [tokenExp, setTokenExp] = useState(null); // token expiry time state
    const token = useSpotify(); // custom hook that runs on initial render (on mount)
    // const {token,setToken} = useContext(authContext); // use context hook allowing component to hook into state and also use values provided by context
    // const {loggedIn} = useLoggedIn();   



    if(token){
        // triggered if token is present 
        return <Navigate replace to= "/stats"/>
    }

    return (
        <div id="home-screen-outer-container">
            <Header/>
            <main id="main-content-container">
                <div id="spotify-logo-container">
                    <img src={SpotifyLogo} alt="" />
                </div>
                
                <div id="hero-text-container">
                    <div id="text-container">
                        <h3 id="hero-text">Your Spotify account <br></br>
                        <span className="hero-text-span">brought to life</span>
                        </h3>    
                    </div>                    
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default HomeScreen;