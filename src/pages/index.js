import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Countdown from "../Components/Countdown";
import * as styles from "../Styles/Content.module.css";
import * as contact from '../Styles/Contact.module.css'
import Statue from "../images/statue.png";
import MobileStatue from "../images/statue-mobile.png";
import RightLion from "../images/lion-blue.png";
import LeftLion from "../images/lion-red.png";
import { motion } from "framer-motion";
import Cursor from "../images/cursor.png"
import FrontStatue from "../images/statue2bright.png"
import BackStatue from "../images/statue2bg.png"
import ContactProfile from "../Components/Profile"
import BackStatueMobile from "../images/statue2bg_mobile.png"
import logo from "../images/logo.svg"
import Form from "../Components/Form"


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

    


    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const cursorCircle = document.getElementById("cursorFollower");
        const cursorImg = document.getElementById("cursorImg");
        const statueContainer = document.getElementById("statueContainer");
        const statue = document.getElementById("statue");
        const contactPage = document.getElementById("contactPage");
        const frontStatue = document.getElementById("frontStatue");
        const backStatue = document.getElementById("backStatue");

        if (window.innerWidth >= 1000) {
            window.onpointermove = (event) => {
                const { clientX, clientY } = event;

                cursor.style.display = "block";
                cursorCircle.style.display = "block";
                cursor.style.opacity = "1";
                cursorCircle.style.opacity = "1";
                cursor.style.left = `${clientX}px`;
                cursor.style.top = `${clientY}px`;

                let _clientX = clientX - 68;
                let _clientY = clientY - 68;

                cursorCircle.animate(
                    {
                        left: `${_clientX}px`,
                        top: `${_clientY}px`,
                    },
                    { duration: 500, fill: "forwards" }
                );
            };
            const handleScroll = () => {
                const position = window.scrollY;
                const statueHeight = 75 + (position / 20);
                const contactRadius = 70 - (position / 10);
                const statueLeft = 5 + (position / 50);
                const backStatueLeft = -10 + (position / 70);


                
                cursorImg.style.transform = `rotate(${position / 5}deg)`;
                statue.style.height = `${statueHeight}%`;
                if (position <= window.innerHeight) {
                    statueContainer.style.position = "fixed";
                    contactPage.style.borderRadius = `${contactRadius}%`;
                    frontStatue.style.left = `${statueLeft}vw`;
                    backStatue.style.left = `${backStatueLeft}vw`;
                }
                else {
                    statueContainer.style.position = "absolute";
                    contactPage.style.borderRadius = 0;
                }
            };
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
        return () => {
            window.onpointermove = null;
        };
    }, [])

    const [regPage, setRegPage] = useState(false);
    const [showBlackScreen, setShowBlackScreen] = useState(false);



    return (
        <>
            <div className="cursor" id="cursor"></div>
            <div className="cursorFollower" id="cursorFollower"><img id="cursorImg" src={Cursor}></img></div>
            {showBlackScreen && <div className="blackScreen"><img src={logo} /></div>}
            {!regPage && <Layout
                setRegPage={setRegPage}
                setShowBlackScreen={setShowBlackScreen}
                navbar={true}
                fixedbg={true}
                overflow={false}
                content={
                    <main>
                        <motion.div className={styles["statueContainer"]} id="statueContainer"
                            initial={{ y: [600] }}
                            animate={{ y: [600, 0] }}
                            transition={{
                                delay: "0",
                                duration: "1",
                                ease: "easeInOut",
                                times: [0, 1],
                            }}>
                            <img id="statue" src={Statue} className={`${styles["statue"]} ${styles["desktopStatue"]}`} />
                            <img src={MobileStatue} className={`${styles["statue"]} ${styles["mobileStatue"]}`} />
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
            />}
            {/* <Layout 
            navbar={false}
            fixedbg={false}
            id
            content={
                <main></main>
            }
            /> */}
            {!regPage && <Layout
                overflow={false}
                navbar={false}
                fixedbg={false}

                content={
                    <main id="contactPage" className={contact["page"]}>
                        <div id="contactContainer" className={contact["container"]}>
                            <div className={contact["pageBackground"]}>
                                <img id="frontStatue" src={FrontStatue} className={contact["frontStatue"]} />
                                <img id="backStatue" src={BackStatue} className={contact["backStatue"]} />
                                {/* <img src={BackStatueMobile} className={contact["backStatueMobile"]} /> */}

                            </div>
                            <div className={contact["backStatueMobile"]} style={{ backgroundImage: `url(${BackStatueMobile})` }}></div>
                            <div className={contact["content"]}>
                                <div className={contact["contentContainer"]}>
                                    <div className={contact["title"]}>CONTACT US</div>
                                    <div className={contact["cardsContainer"]}>
                                        <ContactProfile />
                                        <ContactProfile />
                                        <ContactProfile />
                                        <ContactProfile />
                                        <ContactProfile />
                                        <ContactProfile />
                                        <ContactProfile />
                                        <ContactProfile />
                                        <ContactProfile />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                }
            />}
            {regPage && <Layout
                overflow={true}
                navbar={false}
                fixedbg={false}
                content={<Form setRegPage={setRegPage} />}
            />}
        </>
    );
};

export default IndexPage;

export const Head = () =>
    <>
        <title>BOSM '23 | The Roar of Resilience</title>
        <link rel="icon" type="image/x-icon" href={logo} />
    </>;
