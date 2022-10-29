import React, { Component } from 'react';
import './ActionButton.css'

function ActionButton(props){ // takes in props {text} and onClick handler(for unique button clicks)


    return (
        <button type="button" id='action-btn' class="btn btn-primary" onClick={props.onClick} style={props.style}>
            {props.text}
        </button>
    )
}

export default ActionButton;