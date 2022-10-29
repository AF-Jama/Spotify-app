import React,{useState,useEffect} from "react";
import {authScopesString,BASE_URL,CLIENT_ID,CLIENT_SECRET,AUTH_URL} from '../config/config.js';
import loginContext from "../contexts/LoginContext/LoginContext";

const useSpotify = ()=>{
    const [token, setToken] = useState(null); // token state
    const [tokenExp, setTokenExp] = useState("null"); // token expiry time state


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
                console.log(`State token is ${token}`)
                localStorage.setItem('token',accessToken);
            }catch(err){ // error block triggered, meaning split method hits error
                console.log("Initial render split error")
                return; 
            }
        }else{
            console.log("Present")
        }
    },[])

    return {token,tokenExp};


}




export default useSpotify;