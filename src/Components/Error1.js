import React from "react";
import "../Styles/Error.css"
import error1 from "../images/error1.png"

export default function Error( props){

    return(
        <div className="backdrop" onClick={props.onClose}>
            <div className="error">
                <img src={error1} />
                <p>{props.text}</p>
                <div onClick={props.onClose}>Back</div>
            </div>
        </div>
    );
};