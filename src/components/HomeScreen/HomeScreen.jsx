import React,{Component,useState,useEffect,useContext} from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"
import SpotifyLogo from '../../assets/spotify-logo.jpeg'
import authContext from "../../contexts/AuthContext/AuthContext"
import useLoggedIn from "../../customHooks/useLoggedIn"
import './HomeScreen.css'

function HomeScreen(props){
    // const [token, setToken] = useState(null); // token state
    const [tokenExp, setTokenExp] = useState(null); // token expiry time state
    const {token,setToken} = useContext(authContext) // use context hook allowing component to hook into state and also use values provided by context
    const {loggedIn,setLoggedIn} = useLoggedIn();


    useEffect(()=>{
        const hash = window.location.hash;
        let accessToken;
        if(!token||!loggedIn){
            console.log("Not present")
            try{
                accessToken = hash.split('#access_token=')[1].split('&token_type')[0];
                accessToken = `Bearer ${accessToken}`;
                console.log(`Token is ${accessToken}`)
                setToken(accessToken)
                console.log(`State token is ${token}`)
                localStorage.setItem('token',accessToken);
                window.location.href = "/stats"
            }catch(err){ // error block triggered, meaning split method hits error
                console.log("Initial render split error")
                return; 
            }
        }else{
            console.log("Present")
        }
    },[])

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