import React, { Component, useState,useContext } from 'react';
import authContext from '../../contexts/AuthContext/AuthContext';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Avatar from '../Avatar';
import Profile from '../Profile';
import SideBar from '../SideBarComponent';
import TopSongComponent from '../TopSongComponent';
import SearchComponent from '../common/SearchComponent';
import ArtistInformation from '../ArtistInformationComponent';
import PlaybackCard from '../PlaybackCard';
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
                return(
                    <div id="artist-search-outer-container">
                        <SearchComponent onChange={onChange}/>
                        <ArtistInformation query={query}/>
                    </div>
                )
                return <h1>SUCCESFUL 1</h1>

            case 3:
                return (
                    <div id="playback-state-outer-container" style={{border:"2px solid red"}}>
                        <PlaybackCard/>
                    </div>
                )

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

    function onChange(event){
        event.preventDefault()

        setQuery(event.target.value); // onChange method triggers setQuery which triggers re render
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
            <Footer/>
        </div>
    )
}

export default StatsScreen;