import React, { useRef } from "react";
import { motion,  useScroll } from "framer-motion";
import * as about from "../Styles/About.module.css";
// import AboutUsCarousel from "../Components/AboutUsCarousel.js"
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
            {/* <div className={about["carouselContainer"]}>
            <AboutUsCarousel/>
            </div> */}
        </div>
        <div className={about["bottomContainer"]}>

        </div>
        </main>
    );
};

export default AboutUs;