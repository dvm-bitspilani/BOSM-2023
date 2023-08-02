import * as React from "react";
import Layout from "../Components/Layout";
import Countdown from "../Components/Countdown";
import * as styles from "../Styles/Content.module.css";
import Statue from "../images/statue.svg";
import RightLion from "../images/lion-blue.png";
import LeftLion from "../images/lion-red.png";
import { motion } from "framer-motion";

const IndexPage = () => {
    return (
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
    );
};

export default IndexPage;

export const Head = () => <title>BOSM '23 | The Roar of Resilience</title>;
