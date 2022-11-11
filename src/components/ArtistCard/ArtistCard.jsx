import React,{useState,useEffect,useContext} from "react";
import './ArtistCard.css';


const ArtistCard = (props)=>{

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
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  

    return (
        <div id="artist-card">
            <h4>{props.data.artists.items[0].name}</h4>
            <a id="artist-image-container" href={props.data.artists.items[0].external_urls.spotify}>
                <img src={props.data.artists.items[0].images[1].url} alt=""/>
            </a>
            <div id="artist-stats">
                <span id="followers-span">Followers:{convertNumberToTruncatedVersion(props.data.artists.items[0].followers.total)}</span>
                <span id="genre-span">Genre:{capitalizeFirstLetter(props.data.artists.items[0].genres[1])}</span>
            </div>
        </div>
    )
}


// {/* <div id="data-container" style={{border:"2px solid white", width:"50%", margin:"1rem auto",paddingBottom:"4rem",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}> /* Artist Card */
// <div id="artist-name">{data.artists.items[0].name}</div>
// </div> */}

export default ArtistCard;