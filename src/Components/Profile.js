import React from "react";
import * as contact from "../Styles/Contact.module.css"
import ProfilePicBoy from "../Components/ContactsData/ContactImages/contact_boy.png"
import ProfilePicGirl from "../Components/ContactsData/ContactImages/contact_girl.png"
import { motion } from "framer-motion";
import MailIcon from "../images/mailIcon.png"
import PhoneIcon from "../images/phoneIcon.png"

export default function Profile(props) {

    return (
        <div className={contact["profileContainer"]}>
            <div className={contact["profileImg"]}
                style={{
                    backgroundImage: `url(${props.img})`, backgroundColor: "#5E7F88"
                }}
            ></div>
            <div className={contact["profileName"]}>
                <div>{props.name}</div>
            </div>
            <div className={contact["profileDept"]}>
                <div>{props.dept}</div>
            </div>
            <div className={contact["icons"]}>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}>
                    <a href={`tel:${props.phone}`}>
                    <img src={PhoneIcon} alt="phone" />
                </a></motion.div>
            <motion.div whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}>
                <a href={`mailto:${props.email}`}>
                <img src={MailIcon} alt="mail" /></a></motion.div>
        </div>
        </div >
    )
}