import React from "react";
import "../Styles/Error.css"
import error2 from "../images/error2.png"

export default function Error( props){

    return(
        <div className="backdrop" onClick={props.onClose} aria-hidden="true">
            <div className="error">
                <img src={error2} alt="" />
                <p>{props.text}</p>
                <div onClick={props.onClose} aria-hidden="true">Back</div>
            </div>
        </div>
    );
};