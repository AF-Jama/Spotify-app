import { useContext,useEffect, useState } from "react";
import authContext from "../contexts/AuthContext/AuthContext";
import {authScopesString,BASE_URL,CLIENT_ID,CLIENT_SECRET,AUTH_URL,ACCESS_URL} from '../config/config.js'

const useLoggedIn = ()=>{
    const {token,setToken} = useContext(authContext);
    const [loggedIn,setLoggedIn] = useState(false);
    console.log(`Token in useLoggedIN hook is ${token}`)

    if(!token||token!==window.localStorage.getItem('token')){
        // block triggered if token is null or token is not the same 
        return {loggedIn,setLoggedIn}        
    }
    setLoggedIn(true);

    return {loggedIn,setLoggedIn}


}


export default useLoggedIn;