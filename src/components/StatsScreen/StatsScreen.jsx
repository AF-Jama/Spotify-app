import React, { Component, useState,useContext } from 'react';
import authContext from '../../contexts/AuthContext/AuthContext';
import Header from '../common/Header';
import Avatar from '../Avatar';
import useFetch from '../../customHooks/useFetch';
import useLoggedIn from '../../customHooks/useLoggedIn';
import './StatsScreen.css'
import { Navigate } from 'react-router-dom';

function StatsScreen(props){
    const [count,setCount] = useState(0)
    // const {token,setToken} = useContext(authContext);
    const {token} = useLoggedIn();

    if(!token){
        return <Navigate to='/'/>
    }


    return (
        <div id="stats-screen-outer-container">
            <Header/>
            <div id="stats-outer-container">
                
            </div>
        </div>
    )
}

export default StatsScreen;