import * as React from "react";
import Layout from "../Components/Layout";
import Countdown from "../Components/Countdown";
import * as styles from "../Styles/Content.module.css";
import * as contact from '../Styles/Contact.module.css'
import Statue from "../images/statue.svg";
import RightLion from "../images/lion-blue.png";
import LeftLion from "../images/lion-red.png";
import { motion } from "framer-motion";

import FrontStatue from "../images/statue2bright.png"
import BackStatue from "../images/statue2bg.png"
import ContactProfile from "../Components/Profile"


const IndexPage = () => {

    const contactsData = {
        "contactData": [
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          },
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          },
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          },
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          },
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          },
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          },
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          },
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          },
          {
            "image": "../images/contact_profile",
            "department": "Department Name",
            "phone": "+91-9999999999",
            "email": "abcd@pilani.bits-pilani.ac.in"
          }
        ]
      }

    return (
        <>
        <Layout
            navbar={true}
            fixedbg={true}
            content={
                <main>
                    <motion.div className={styles["statueContainer"]}
                        initial={{ y: [600] }}
                        animate={{ y: [600, 0] }}
                        transition={{
                            delay: "0",
                            duration: "1",
                            ease: "easeInOut",
                            times: [0, 1],
                        }}>
                        <img src={Statue} className={styles["statue"]} />
                    </motion.div>
                    <motion.div className={styles["leftLion"]}
                        initial={{ opacity: [0], x: [100] }}
                        animate={{ opacity: [0, 1], x: [100, 0] }}
                        transition={{
                            delay: "1",
                            duration: "1",
                            ease: "easeInOut",
                            times: [0, 1],
                        }}>
                        <img src={LeftLion} />
                    </motion.div>
                    <motion.div className={styles["rightLion"]}
                        initial={{ opacity: [0], x: [-100] }}
                        animate={{ opacity: [0, 1], x: [-100, 0] }}
                        transition={{
                            delay: "1",
                            duration: "1",
                            ease: "easeInOut",
                            times: [0, 1],
                        }}>
                        <img src={RightLion} />
                    </motion.div>
                    <div className={styles["container"]}>
                        <motion.div
                            initial={{ opacity: [0] }}
                            className={styles["heading"]}
                            animate={{ opacity: [0, 1] }}
                            transition={{
                                delay: "2",
                                duration: "1",
                                ease: "easeInOut",
                                times: [0, 1],
                            }}
                        >
                            <h1>BOSM</h1>
                        </motion.div>
                        <motion.div
                            className={styles["leftSubTitle"]}
                            initial={{ opacity: [0] }}
                            animate={{ opacity: [0, 1] }}
                            transition={{
                                delay: "2",
                                duration: "1",
                                ease: "easeInOut",
                                times: [0, 1],
                            }}
                        >
                            <h1>The</h1>
                            <h2>ROAR</h2>
                        </motion.div>

                        <motion.div
                            className={styles["rightSubTitle"]}
                            initial={{ opacity: [0] }}
                            animate={{ opacity: [0, 1] }}
                            transition={{
                                delay: "2",
                                duration: "1",
                                ease: "easeInOut",
                                times: [0, 1],
                            }}
                        >
                            <h1>of</h1>
                            <h2>RESILIENCE</h2>
                        </motion.div>

                        {/* Hero Wrapper */}
                        <motion.div className={styles["heroWrapper"]}>

                        </motion.div>

                        {/* Countdown */}
                        <motion.div
                            className={styles["countDown"]}
                            initial={{ opacity: [0] }}
                            animate={{ opacity: [0, 1] }}
                            transition={{
                                delay: "2",
                                duration: "1",
                                ease: "easeInOut",
                                times: [0, 1],
                            }}
                        >
                            <Countdown />
                        </motion.div>
                    </div>
                </main>
            }
        />

        <Layout
            navbar={false}
            fixedbg={true}

            content={
                <main className={contact["page"]}>
                    <div className={contact["container"]}>
                    <div className={contact["pageBackground"]}>
                        <img src={FrontStatue} className={contact["frontStatue"]} />
                        <img src={BackStatue} className={contact["backStatue"]} />
                    </div>
                    <div className={contact["content"]}>
                    <div className={contact["contentContainer"]}>
                        <div className={contact["title"]}>CONTACT US</div>
                        <div className={contact["cardsContainer"]}>
                            <ContactProfile/>
                            <ContactProfile/>
                            <ContactProfile/>
                            <ContactProfile/>
                            <ContactProfile/>
                            <ContactProfile/>
                            <ContactProfile/>
                            <ContactProfile/>
                            <ContactProfile/>
                        </div>
                    </div>
                    </div>
                    </div>
                </main>
            }
        />
        </>
    );
};

export default IndexPage;

export const Head = () =>
 <>
     <title>BOSM '23 | The Roar of Resilience</title> 
     <link rel="icon" type="image/x-icon" href="../images/icon.png" />
 </>;
