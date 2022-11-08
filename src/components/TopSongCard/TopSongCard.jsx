import React,{useState,useEffect} from "react";
import ActionButton from "../common/ActionButton";
import './TopSongCard.css'


const TopSongCard = (props)=>{ // {{}}

    const {data} = props // destructures props object

    function onTrackClick(event){
        event.preventDefault();

        window.open(data.external_urls.spotify, '_blank').focus();
    }


    return (
        <div id="top-song-card" style={{}}>
            <div id="main-section-container">
                <div id="artist-name">{data.artists[0].name}</div>
                <div id="track-name">{data.name}</div>
                <div id="track-image">
                    <img src={data.album.images[0].url} alt="" style={{border:"2px solid green"}} />
                </div>
            </div>

            <div id="go-to-track-container">
                <ActionButton text="Open Track on Spotify" onClick={onTrackClick}/>
            </div>
        </div>
    )
}


export default TopSongCard;