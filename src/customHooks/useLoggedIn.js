import { useContext,useEffect, useState } from "react";
import authContext from "../contexts/AuthContext/AuthContext";
import logoutToken from "../utils/logoutToken";
import { Navigate } from "react-router-dom";
import {authScopesString,BASE_URL,CLIENT_ID,CLIENT_SECRET,AUTH_URL,ACCESS_URL} from '../config/config.js'

const useLoggedIn = ()=>{
    const {token,setToken} = useContext(authContext);
    console.log(`Token in useLoggedIN hook is ${token}`)

    // useEffect triggered on mount
    useEffect(()=>{
        console.log("USE EFFECT HIT ON INITIAL RENDER (ON MOUNT)")
        let date = new Date();

        if(date<window.localStorage.getItem('expires_in') && token!==window.localStorage.getItem('token')) {
            // return <Navigate replace to='/'/>
            console.log("User is logged in as date is less than expiry time but token does match")
            setToken(window.localStorage.getItem('token'))
        }else if((date<window.localStorage.getItem('expires_in')) && token===window.localStorage.getItem('token')){
            console.log("User is logged in as date is less than expiry time and token does match")
        }
        else{
            console.log("User is not logged in")
            logoutToken();
            setToken(null);
        }

        
    },[])
    
    return {token}; // return token

}


export default useLoggedIn;