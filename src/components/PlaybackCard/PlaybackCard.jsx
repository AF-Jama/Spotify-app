import React,{useEffect,useState,useContext} from "react";
import './PlaybackCard.css'
import ActionButton from "../common/ActionButton";
import useFetch from "../../customHooks/useFetch";


const PlaybackCard = ()=>{
    const playbackStateURL = "https://api.spotify.com/v1/me/player?additional_types=track,episode"
    const {data,error,loading} = useFetch(playbackStateURL);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
      

    if(error||loading|!data){
        return (
            <div id="error-playback-card">
                <h4>No data or error when loading playback data</h4>
            </div>
        )
    }

    if(data){
        console.log(data);
        console.log(data.progress_ms)
        let time = millisToMinutesAndSeconds(data.progress_ms)
        console.log(time)
        if(data.currently_playing_type==='episode'){
            return(
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top" src={data.item.images[2].url} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{data.item.name}</h5>
                        <p class="card-text">{data.item.description.substring(0,50)}...</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{capitalizeFirstLetter(data.item.type)}</li>
                        <li class="list-group-item">{data.item.show.name}</li>
                        <li class="list-group-item">{data.is_playing?millisToMinutesAndSeconds(data.progress_ms):"Not Playing"}</li>
                    </ul>
                    <div class="card-body">
                        {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                        <ActionButton text="Link"/>
                    </div>
                </div>
    
            )
        }

        if(data.currently_playing_type==="track"){
            return (
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top" src={data.item.album.images[1].url} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{data.item.name}</h5>
                        <p class="card-text">{data.item.artists[0].name}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{capitalizeFirstLetter(data.item.type)}</li>
                        <li class="list-group-item">{data.item.album.name}</li>
                        <li class="list-group-item">{data.is_playing?millisToMinutesAndSeconds(data.progress_ms):"Not Playing"}</li>
                    </ul>
                    <div class="card-body">
                        {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                        <ActionButton text="Link"/>
                    </div>
                </div> 
            )
        }

    }


}


export default PlaybackCard;