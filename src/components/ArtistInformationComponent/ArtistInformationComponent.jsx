import React,{useState,useEffect,useContext} from "react";
import SearchComponent from "../common/SearchComponent";
import ArtistCard from "../ArtistCard";
import useFetch from "../../customHooks/useFetch";
import './ArtistInformationComponent.css';


const ArtistInformation = (props)=>{
    const searchArtistURL = `https://api.spotify.com/v1/search?q=${props.query}&type=artist`
    const {data,error,loading} = useFetch(`https://api.spotify.com/v1/search?q=${props.query}&type=artist`);

    if(!props.query){
        return (
            <div id="artist-information-container" style={{border:"2px solid black",margin:"1rem"}}>
                <div id="empty-query-container">
                    <h4>Enter an artists name...</h4>
                </div>
            </div>
        )
    }

    if(error||loading){
        console.log("Error")
        return (
            <div id="artist-information-container">
                <div id="error-loading-container">
                    <h4>Error when loading data</h4>
                </div>
            </div>
        )
    }

    if(data){
        console.log("HERE")
        console.log(data)
        return (
            <div id="artist-information-container">
                <ArtistCard data={data}/>
            </div>
        )
    }
}


export default ArtistInformation;