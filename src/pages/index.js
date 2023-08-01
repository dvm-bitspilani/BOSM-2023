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
          <motion.div className={styles["statueContainer"]} 
            animate={{ opacity: [0, 1], y: [100, 0] }}
            transition={{
              delay: "2",
              duration: "1.5",
              ease: "easeInOut",
              times: [0, 1],
            }}>
            <img src={Statue} className={styles["statue"]} />
          </motion.div>
          <motion.div className={styles["leftLion"]}
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{
              delay: "3",
              duration: "1.5",
              ease: "easeInOut",
              times: [0, 1],
            }}>
            <img src={LeftLion} />
          </motion.div>
          <motion.div className={styles["rightLion"]}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{
              delay: "3",
              duration: "1.5",
              ease: "easeInOut",
              times: [0, 1],
            }}>
            <img src={RightLion} />
          </motion.div>
          <div className={styles["container"]}>
            <motion.div
              className={styles["heading"]}
              animate={{ opacity: [0, 1], scale: [0, 1] }}
              transition={{
                delay: "3",
                duration: "1",
                ease: "easeInOut",
                times: [0, 1],
              }}
            >
              <h1>BOSM</h1>
            </motion.div>
            <motion.div className={styles["heroWrapper"]}>
              
            </motion.div>
            <motion.div
              className={styles["countDown"]}
              animate={{ opacity: [0, 1], x: [-100, 0] }}
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
  );
};

export default IndexPage;

export const Head = () => <title>BOSM '23 | The Roar of Resilience</title>;
