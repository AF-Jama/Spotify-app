import React,{useState,useEffect,useContext} from "react";
import './SearchComponent.css';


const SearchComponent = (props)=>{

    return (
        <input type="text" id="textInputContainer" onChange={props.onChange} placeholder="Search for artist here..."/>
    )
}


export default SearchComponent;