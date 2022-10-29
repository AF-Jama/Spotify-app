import React, { useState,useEffect } from "react";
import axios from "axios";


const useFetch = (token,URL)=>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    // useEffect runs on initial render(mount) and if URL or token changes 
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                let response = await axios.get(`${URL}`,{
                    headers:{
                        "Authorization":`Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
    
                response = await response.json();
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
    },[URL,token])

    return {data,loading,error};
}

export default useFetch;