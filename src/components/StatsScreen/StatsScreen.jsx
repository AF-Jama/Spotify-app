import React, { Component, useState,useContext } from 'react';
import authContext from '../../contexts/AuthContext/AuthContext';
import Header from '../common/Header';
import Avatar from '../Avatar';
import Profile from '../Profile';
import SideBar from '../SideBarComponent';
import TopSongComponent from '../TopSongComponent';
import useFetch from '../../customHooks/useFetch';
import useLoggedIn from '../../customHooks/useLoggedIn';
import './StatsScreen.css'
import { Navigate } from 'react-router-dom';
import { render } from '@testing-library/react';

function StatsScreen(props){
    const [count,setCount] = useState(0)
    const [containerNumber,setContainerNumber] = useState(1);
    const [query,setQuery] = useState('');
    // const {token,setToken} = useContext(authContext);
    const {token} = useLoggedIn();

    if(!token){
        return <Navigate to='/'/>
    }

    function renderSwitch(params){
        switch(params){
            case 1:
                return <TopSongComponent/>

            case 2:
                return <h1>SUCCESFUL 1</h1>

            case 3:
                return <h2>SUCCESFUL 2</h2>

        }
    }

    function firstClick(event){
        event.preventDefault();

        setContainerNumber(1);
    }

    function secondClick(event){
        event.preventDefault();

        setContainerNumber(2);
    }

    function thirdClick(event){
        event.preventDefault();

        setContainerNumber(3);
    }



    return (
        <div id="stats-screen-outer-container">
            <Header/>
            <div id="stats-outer-container">
                <Profile/>
                <div id="spotify-api-container">
                    <SideBar firstClick={firstClick} secondClick={secondClick} thirdClick={thirdClick} />
                    {renderSwitch(containerNumber)}
                </div>
            </div>
        </div>
    )
}

export default StatsScreen;