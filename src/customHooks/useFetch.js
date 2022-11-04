import React, { useState,useEffect,useContext } from "react";
import authContext from "../contexts/AuthContext/AuthContext";
import axios from "axios";


const useFetch = (URL)=>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const {token,setToken} = useContext(authContext)

    // useEffect runs on initial render(mount) and if URL or token changes 
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                let response = await fetch(URL,{
                    headers:{
                        "Authorization":`${token}`,
                        "Content-Type": "application/json"
                    }
                })

                console.log(1)

                if(!response.ok) throw new Error("Error triggered");

                console.log(2)
    
                response = await response.json();

                console.log(3)

                console.log(`Response is ${response}`)
                setData(response);
                setLoading(false);
                setError(null);
            }catch(error){
                setData(null);
                setError(error)
                setLoading(true)
            }
        }

        fetchData()
    },[URL])

    return {data,loading,error};
}

export default useFetch;