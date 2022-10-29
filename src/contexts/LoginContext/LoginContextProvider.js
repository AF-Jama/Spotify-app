import React,{useState} from "react";
import loginContext from "./LoginContext";


const LoginProvider = ({children})=>{
    const [auth,setAuth] = useState(false);

    return (
        <loginContext.Provider value={{loginStatus,setLoginStatus}}>
            {children}
        </loginContext.Provider>
    )
}


export default LoginProvider;