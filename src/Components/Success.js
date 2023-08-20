import React from "react";
import "../Styles/Error.css"
import register from "../images/register.png"

export default function Error( props){

    return(
        <div className="backdrop" onClick={props.onClose}>
            <div className="error">
                <img src={register} />
                <p>Registration Successful! Please checks your Mail Inbox.</p>
                <div onClick={props.onClose}>Back</div>
            </div>
        </div>
    );
};