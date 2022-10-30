import {useState} from 'react';
import authContext from './AuthContext';


const AuthContextProvider = ({children})=>{ // auth context provider that wraps components that can use values provided by the provider

    const [token,setToken] = useState(null);


    return (
        <authContext.Provider value={{token,setToken}}> // provider takes in two arguments value, state and setToken
            {children}
        </authContext.Provider>
    )
}


export default AuthContextProvider;