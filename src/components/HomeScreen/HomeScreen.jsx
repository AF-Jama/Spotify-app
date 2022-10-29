import React,{Component} from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"
import SpotifyLogo from '../../assets/spotify-logo.jpeg'
import './HomeScreen.css'

function HomeScreen(props){

    return (
        <div id="home-screen-outer-container">
            <Header/>
            <main id="main-content-container">
                <div id="spotify-logo-container">
                    <img src={SpotifyLogo} alt="" />
                </div>
                
                <div id="hero-text-container">
                    <div id="text-container">
                        <h3>Your Spotify account <br></br>
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