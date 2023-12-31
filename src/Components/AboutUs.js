import React from "react";
import { motion} from "framer-motion";
import * as about from "../Styles/About.module.css";
import Carousel from "./Carousel";
const AboutUs = (props) => {
 

  // useEffect(()=>{
  //     const page = document.querySelector(`.${about["aboutPage"]}`)
  //     page.style.transform = `translateY(${scrollYProgress}px)`;
  // },[])

  const contentVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const headingVariants = {
    offscreen: {
      opacity: 0,
      x: -200,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.main
      className={about["aboutPage"]}
    //   style={
    //     typeof window !== "undefined"
    //       ? window.innerWidth > 920
    //         ? { background: "transparent" }
    //         : { background: `url(${AboutBG})` }
    //       : ""
    //   }
    >
      <div className={about["topWrapper"]}>
        <div className={about["topContainer"]}>
          <div className={about["heading"]}>
            <motion.h1
              variants={headingVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              ABOUT US
            </motion.h1>
          </div>
          <div className={about["carouselContainer"]}>
            <Carousel />
          </div>
        </div>
      </div>
      <div
        className={about["whiteBar"]}
        style={{
          height: "2px",
          background: "white",
          marginInline: "auto",
          // marginTop: '3rem',
        }}
      ></div>
      <div className={about["bottomWrapper"]}>
        <div className={about["bottomContainer"]}>
          <motion.div
            className={about["contentContainer"]}
            variants={contentVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <div className={about["group"]}>
              <div className={about["index"]}>01</div>
              <div className={about["flexContainer"]}>
                <div className={about["title"]}>
                  <h1>BOSM</h1>
                </div>
                <div className={about["desc"]}>
                  One of the biggest sports extravaganzas in the Country, BITS
                  Open Sports Meet (BOSM), is back with its 36th edition this
                  winter.<span style={{display: (typeof window !== undefined && window.innerWidth < 500 && window.innerHeight < 750) ? 'none': 'block'}}> The annual sports fest of BITS Pilani, Pilani Campus,
                  since its inception in 1986, has been a stage for college
                  teams to showcase their supremacy by competing amongst the
                  nation's best talents.
                  </span>
                </div>
              </div>
            </div>
            <div className={about["group"]}>
              <div className={about["index"]}>02</div>
              <div className={about["flexContainer"]}>
                <div className={about["title"]}>
                  <h1>THEME</h1>
                </div>
                <div className={about["desc"]}>
                  The theme for BOSM 2023 is "Roar of Resilience." It signifies
                  the stage being set for the sporting event and glory tells us
                  about the success stories and efforts that one puts into
                  achieving their feats.
                </div>
              </div>
            </div>
            <div className={about["group"]}>
              <div className={about["index"]}>03</div>
              <div className={about["flexContainer"]}>
                <div className={about["title"]}>
                  <h1>SIGNIFICANCE</h1>
                </div>
                <div className={about["desc"]}>
                  This theme encourages participants to face challenges with
                  courage, bounce back from setbacks, and demonstrate their
                  unwavering determination, fostering personal growth,
                  perseverance, and the celebration of triumphs against all
                  odds.{" "}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default AboutUs;
