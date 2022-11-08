import React,{useState,useContext} from "react";
import './SideBarComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";


const SideBar = (props)=>{
    const dropDownIcon = useRef(null); 
    const dropDownContainer = useRef(null);

    function dropDownOnClick(event){
        event.preventDefault();

        if(dropDownContainer.current.style.display === 'block'){
            dropDownContainer.current.style.display = 'none';
            return;
        }
        dropDownContainer.current.style.display = 'block';
        return;

    }


    return (
        <div id="side-bar-container" style={{border:"2px solid green;"}}>
            <div id="drop-down-icon-container">
                <FontAwesomeIcon icon={faCaretDown} color="white" id="caretDownContainer" ref={dropDownIcon} height="100px" width="100px" onClick = {dropDownOnClick}/> 
            </div>

            <div id="drop-down-container" ref={dropDownContainer}>
                <a href="#" id="topSongs" className="drop-down-item" onClick={props.firstClick}>Your Top Songs</a>
                <a href="#" id="spotifySearch" className="drop-down-item" onClick={props.secondClick}>Search</a>
                <a href="#" id="playbackState" className="drop-down-item" onClick={props.thirdClick}>Get Your Playback State</a>
            </div>
        </div>
    )
}


export default SideBar;