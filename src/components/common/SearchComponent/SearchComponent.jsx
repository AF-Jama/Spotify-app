import React,{useState,useEffect,useContext} from "react";
import './SearchComponent.css';


const SearchComponent = (props)=>{

    return (
        <input type="text" onChange={props.onChange}/>
    )
}


export default SearchComponent;