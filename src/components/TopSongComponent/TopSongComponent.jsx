import React,{useState,useEffect} from "react";
import ActionButton from "../common/ActionButton";
import TopSongCard from "../TopSongCard/TopSongCard";
import useFetch from "../../customHooks/useFetch";
import './TopSongComponent.css';


const TopSongComponent = (props)=>{
    const topTracksURL = "https://api.spotify.com/v1/me/top/tracks";
    const {data,loading,error} = useFetch(topTracksURL);

    console.log(`Data is ${data}`)
    console.log(`Loading is ${loading}`)
    console.log(`Error is ${error}`)

    function foo(event){
        event.preventDefault()

        console.log("Clicked")
        window.location.reload();
    }

    if(error||loading){
        return (
            <div id="top-song-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div id="error-card-container">
                    <div id="error-message">
                        <h4>Error when fetching top song data...</h4>
                    </div>

                    <div id="button-container">
                        <ActionButton text="Refresh Page" onClick={foo}/>
                    </div>
                </div>
            </div>
        )
    }

    if(data){
        // triggered if data is null render "you have no top songs"
        // while loop  data.next, while(data.next!==null) and render each card
        if(data.items.length===0){
            // triggered if item array containing top tracks object is empty
            return (
                <div id="top-song-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div id="no-data-card-container">
                        <div id="no-data-message">
                            <h4>Error when fetching top song data...</h4>
                        </div>

                        <div id="button-container">
                            <ActionButton text="Refresh Page" onClick={window.location.reload()}/>
                        </div>
                    </div>
                </div>
            )
        }
        console.log("HERE")
        console.log(data.items)
        let cardComponentArray = data.items.map(track=><TopSongCard data={track}/>)
        return (
            <div id="top-song-container"> 
                {/* {data.items.map(track=>{
                    // <TopSongCard data={track}/>
                    <h1 style={{color:"white"}}>{track}</h1>
                })} */}
                {cardComponentArray}
            </div>

        )
    }
}

export default TopSongComponent;