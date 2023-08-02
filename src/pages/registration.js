import React from 'react';
import Layout from '../Components/Layout';
import rp_bg from "../images/rp_bg.png";
import rp_bg_icons from "../images/rp_bg_icons.png";
import * as styles from "../Styles/Content.module.css";

const registration = () => {


  return (
    <Layout
        navbar={false}
        fixedbg={false}
        content={
            <section className={styles["regPage"]}>
                <div className={styles["rpIcons"]}></div>

            </section>
        }
    />
  );
};

export default registration;