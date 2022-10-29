import React, { Component, useState } from 'react';
import Header from '../common/Header';
import useFetch from '../../customHooks/useFetch';
import './StatsScreen.css'

function StatsScreen(props){
    const [count,setCount] = useState(0)

    return (
        <div id="stats-screen-outer-container">
            <Header/>
        </div>
    )
}

export default StatsScreen;