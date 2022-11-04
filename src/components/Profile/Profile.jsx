import React,{useState,useContext} from "react";
import { Navigate } from "react-router-dom";
import authContext from "../../contexts/AuthContext/AuthContext";
import useFetch from "../../customHooks/useFetch";
import './Profile.css'
import Avatar from "../Avatar";
import { useEffect } from "react";


const Profile = ()=>{
    const {token,setToken} = useContext(authContext);
    const {data,loading,error} = useFetch('https://api.spotify.com/v1/me'); // need to refactor fetch hook to involve url argument
    console.log(`Token in profile component ${token}`);

    console.log(`dATA IS ${data}`)

    if(!token){
        // triggered if token is present
        return <Navigate replace to='/'/>

    }

    if(data){
        return (
            <div id="profile-container">
                <div id="avatar-and-name-container">
                    <Avatar/>
                    <h6 style={{color:"white"}}>{data.display_name}</h6>
                </div>

                <div id="added-information-container">
                    <div id="country-code">{data.country}</div>
                    <div id="user-type">{data.type}</div>
                    <div id="user-email">{data.email}</div>
                </div>

            </div>
        )
    }

    if(loading||error){
        // triggered if loading state is true or error state is true, meaning data has not been fully retrieved as of now
        return (
            <div id="profile-container">
                <Avatar/>
                <h5 style={{color:"red"}}>WorldWide</h5>
            </div>
        )

    }


    // return (
    //     <h1 color="white">SUCCESFUL</h1>
    // )

}

export default Profile;