import React from "react";
import * as contact from "../Styles/Contact.module.css"
import ProfilePic from "../images/contact_profile.jpg"

export default function Profile(){

    return(
        <div className={contact["profileContainer"]}>
            {/* <img src={ProfilePic} alt="profile image" className={contact["profileImg"]}/> */}
            <div className={contact["profileImg"]} style={{backgroundImage: `url(${ProfilePic})`}}></div>
            <div className={contact["profileName"]}>Lorem Ipsum</div>
            <div className={contact["profileDept"]}>Department Name</div>
            <div className={contact["profilePhone"]}>+91-9999999999</div>
            <div className={contact["profileEmail"]}>abc@gmail.com</div>
        </div>

    )
}