import React from "react";
import * as contact from "../Styles/Contact.module.css"
import ProfilePic from "../images/sample_contact_image.png"
import { motion } from "framer-motion";
import MailIcon from "../images/mailIcon.png"
import PhoneIcon from "../images/phoneIcon.png"


export default function Profile() {

    return (
        <div className={contact["profileContainer"]}>
            {/* <img src={ProfilePic} alt="profile image" className={contact["profileImg"]}/> */}
            <div className={contact["profileImg"]}
                style={{ backgroundImage: `url(${ProfilePic})` }}
            ></div>
            <div className={contact["profileName"]}>
                Lorem Ipsum
            </div>
            <div className={contact["profileDept"]}>Department</div>
            <div className={contact["icons"]}>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}><img src={PhoneIcon} alt="phone" /></motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}><img src={MailIcon} alt="mail" /></motion.div>
            </div>
        </div>

    )
}