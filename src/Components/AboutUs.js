import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as about from "../Styles/About.module.css";


const AboutUs = (props) => {

    const { scrollYProgress } = useScroll();
    const pageRadius = useTransform(scrollYProgress, [0, 0.3], ['75%', '0%']);
    // useEffect(()=>{
    //     const page = document.querySelector(`.${about["aboutPage"]}`)
    //     page.style.transform = `translateY(${scrollYProgress}px)`;
    // },[])

    return (
        <motion.main
            className={about["aboutPage"]}
            style={{ borderRadius: pageRadius }}
        >
            <div className={about["topContainer"]}>
                <div className={about["heading"]}>
                    <h1>ABOUT US</h1>
                </div>
            </div>
            <div className={about["bottomContainer"]}>
                <div className={about["contentContainer"]}>
                    <div className={about["group"]}>
                        <div className={about["title"]}>
                            <h1>BOSM</h1>
                        </div>
                        <div className={about["desc"]}>
                            One of the biggest sports extravaganzas in the Country, BITS Open Sports Meet (BOSM), is back with its 36th edition this winter. The annual sports fest of BITS Pilani, Pilani Campus, since its inception in 1986, has been a stage for college teams to showcase their supremacy by competing amongst the nation's best talents.
                        </div>
                    </div>
                    <div className={about["group"]}>
                        <div className={about["title"]}>
                            <h1>THEME</h1>
                        </div>
                        <div className={about["desc"]}>
                            The theme for BOSM 2022 is "Roar of Resilience." It signifies the stage being set for the sporting event and glory tells us about the success stories and efforts that one puts into achieving their feats.
                        </div></div>
                    <div className={about["group"]}>
                        <div className={about["title"]}>
                            <h1>SIGNIFICANCE</h1>
                        </div>
                        <div className={about["desc"]}>
                            This theme encourages participants to face challenges with courage, bounce back from setbacks, and demonstrate their unwavering determination, fostering personal growth, perseverance, and the celebration of triumphs against all odds.                </div>
                    </div>
                </div>
            </div>

        </motion.main>
    );
};

export default AboutUs;