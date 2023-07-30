import * as React from "react";
import Layout from "../Components/Layout";
import Countdown from "../Components/Countdown";
import * as styles from "../Styles/Content.module.css";
import Statue from "../images/statue.png";
import RightLion from "../images/lion-blue.png";
import LeftLion from "../images/lion-red.png";
import { motion } from "framer-motion";

const IndexPage = () => {
  return (
    <Layout
      navbar={true}
      content={
        <main>
          <div className={styles["container"]}>
            <motion.div
              className={styles["heading"]}
              animate={{ opacity: [0, 0.8, 1], scale: [0, 1.1, 1]}}
              transition={{
                delay: "5",
                duration: "1.5",
                ease: "easeInOut",
                times: [0, 0.8, 1],
              }}
            >
              <h1>BOSM</h1>
            </motion.div>
            {/* <div className={styles["heroWrapper"]}>
              <div className={styles["heroLeft"]}>
                <div className={styles["heroLeftText"]}>
                  <p><span className={styles["heroFaded"]}>The </span><span className={styles["heroBold"]}>ROAR</span></p>
                </div>
                <div className={styles["heroImg"]}>
                  <img src={LeftLion} alt="Lion" style={{height: '575px', width: '575px'}}></img>
                </div>
                
              </div>
              <div className={styles["heroRight"]}>
              </div>
            </div> */}
            <motion.div
              className={styles["countDown"]}
              animate={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{
                delay: "3",
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
  );
};

export default IndexPage;

export const Head = () => <title>BOSM 2023</title>;
