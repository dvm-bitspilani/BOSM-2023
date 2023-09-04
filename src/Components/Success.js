import React from "react";
import "../Styles/Error.css"
import register from "../images/register.png"

export default function Error( props){

    return(
        <div className="backdrop" onClick={props.onClose} aria-hidden="true" >
            <div className="error">
                <img src={register} alt="" />
                <p>Registration Successful! Please checks your Mail Inbox.</p>
                <div onClick={props.onClose} aria-hidden="true" >Back</div>
            </div>
        </div>
    );
};