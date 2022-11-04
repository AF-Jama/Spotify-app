import React,{useState,useEffect,useContext} from "react";
import {authScopesString,BASE_URL,CLIENT_ID,CLIENT_SECRET,AUTH_URL} from '../config/config.js';
import authContext from "../contexts/AuthContext/AuthContext.js";
// import loginContext from "../contexts/LoginContext/LoginContext";

const useSpotify = ()=>{
    // const [token, setToken] = useState(null); // token state
    // const [tokenExp, setTokenExp] = useState(null); // token expiry time state
    const {token,setToken} = useContext(authContext) // context consumer


    // useEffect runs on initial render
    useEffect(()=>{
        const hash = window.location.hash;
        let accessToken;
        let timeNow = new Date();

        if((timeNow<localStorage.getItem('expires_in'))){
            console.log("Key already exists")
            setToken(localStorage.getItem('token'))
        }


        if(!token && hash){
            // triggered if no token is present in global auth context and hash is present
            accessToken = hash.split('#access_token=')[1].split('&token_type')[0];
            accessToken = `Bearer ${accessToken}`;
            console.log(`Token is ${accessToken}`)
            console.log(`State token is ${token} before`)
            console.log(`State token is ${token} after`)
            window.localStorage.setItem('token',accessToken);
            let currentDate = new Date();
            let futureDate = currentDate.setUTCHours(currentDate.getHours()+1)
            window.localStorage.setItem('expires_in',futureDate) // sets expiration date of access token to an 1 hour
            console.log("Not present")
            setToken(accessToken)
            // try{

            // }catch(err){ // error block triggered, meaning split method hits error
            //     console.log("Initial render split error")
            //     return; 
            // }
        }

        if(!token && !hash){
            console.log("Initial mount, no login button click,")
        }

    },[])

    return token;

}




export default useSpotify;