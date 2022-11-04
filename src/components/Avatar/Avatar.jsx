import React,{useState} from "react";
import './Avatar.css';
import useFetch from "../../customHooks/useFetch";
import GenericProfilePhoto from '../../assets/generic-logo-image.jpeg';

const Avatar = ()=>{
    const {data,loading,error} = useFetch('https://api.spotify.com/v1/me');

    if(loading||error){
        // triggered if loading state is true or error state is true, meaning data has not been fully retrieved as of now
        return <img src={GenericProfilePhoto} alt="" id="avatar-logo" />
    }

    if (data){
        // triggered if data is loaded
        return <img src={GenericProfilePhoto} alt="" id="avatar-logo" />
    }
}


export default Avatar;