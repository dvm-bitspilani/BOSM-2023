import React, { useRef } from "react";
import { motion,  useScroll } from "framer-motion";
import * as about from "../Styles/About.module.css";


const AboutUs =(props) =>{

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    return(
        <main ref={ref} className={about["aboutPage"]}>
        <div className={about["topContainer"]}>
            <div className={about["heading"]}>
                <h1>ABOUT US</h1>
            </div>
        </div>
        <div className={about["bottomContainer"]}>

        </div>
        </main>
    );
};

export default AboutUs;