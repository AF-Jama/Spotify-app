import React,{useState,useEffect,useContext} from "react";
import './ArtistCard.css';


const  ArtistCard = (props)=>{

    function convertNumberToTruncatedVersion (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}
    function capitalizeFirstLetter(string) {
        // first letter of string is converted toUpperCase, if error is triggered then catch block is triggered and null is returned  
        try{
            string[0].toUpperCase()
            return string?string:null;
        }catch(error){
            return null;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  

    return (
        <div id="artist-card">
            <h4>{props.data.artists.items[0].name||null}</h4>
            <a id="artist-image-container" href={props.data.artists.items[0].external_urls.spotify||null}>
                <img src={props.data.artists.items[0].images[1].url||null} alt=""/>
            </a>
            <div id="artist-stats">
                <span id="followers-span">Followers:{convertNumberToTruncatedVersion(props.data.artists.items[0].followers.total)||null}</span>
                <span id="genre-span">Genre:{capitalizeFirstLetter(props.data.artists.items[0].genres[1])||null}</span>
            </div>
        </div>
    )
}


// {/* <div id="data-container" style={{border:"2px solid white", width:"50%", margin:"1rem auto",paddingBottom:"4rem",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}> /* Artist Card */
// <div id="artist-name">{data.artists.items[0].name}</div>
// </div> */}

export default ArtistCard;