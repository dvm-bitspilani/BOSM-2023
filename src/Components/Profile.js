import React from "react";
import * as contact from "../Styles/Contact.module.css"
import ProfilePic from "../Components/ContactsData/ContactImages/contact_boy.png"
import { motion } from "framer-motion";
import MailIcon from "../images/mailIcon.png"
import PhoneIcon from "../images/phoneIcon.png"
import ContactsData from "./ContactsData/Contacts.json"

export default function Profile(props) {

    return (
        <div className={contact["profileContainer"]}>
            <div className={contact["profileImg"]}
                style={{ backgroundImage: `url(${ProfilePic})` }}
            ></div>
            <div className={contact["profileName"]}>
                <div>{props.name}</div>
            </div>
            <div className={contact["profileDept"]}>
                <div>{props.dept}</div>
            </div>
            <div className={contact["icons"]}>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}><img src={PhoneIcon} alt="phone" /></motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}><img src={MailIcon} alt="mail" /></motion.div>
            </div>
        </div>
    )
}