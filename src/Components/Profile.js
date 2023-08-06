import React from "react";
import * as contact from "../Styles/Contact.module.css"
import ProfilePic from "../images/contact_profile.jpg"
import GmailLogo from "../images/GmailLogo.png"
import { motion } from "framer-motion";
export default function Profile(){
    return(
        <div className={contact["profileContainer"]}>
            {/* <img src={ProfilePic} alt="profile image" className={contact["profileImg"]}/> */}
            <div className={contact["profileImg"]}
            //  style={{backgroundImage: `url(${ProfilePic})`}}
             ></div>
            <div className={contact["profileName"]}>
               Lorem Ipsum
                </div>
            {/* <div className={contact["profileDept"]}>Department Name</div> */}
            <div className={contact["profilePhone"]}>+91-9999999999</div>
            <motion.div className={contact["profileEmail"]} whileHover = {{scale:1.1}}> <img src={GmailLogo} alt="Gmail Logo" /> </motion.div>
        </div>

    )
}