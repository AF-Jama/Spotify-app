import React, { Component } from 'react';
import './ActionButton.css'

function ActionButton(props){ // takes in props {text}


    return (
        <button type="button" id='action-btn' class="btn btn-primary" >
            {props.text}
        </button>
    )
}

export default ActionButton;