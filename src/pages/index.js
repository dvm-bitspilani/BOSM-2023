import * as React from "react";
import Layout from "../Components/Layout";
import * as styles from "../Styles/Content.module.css";
import Statue from "../images/statue.png";
import RightLion from "../images/lion-blue.png";
import LeftLion from "../images/lion-red.png";

const IndexPage = () => {
  return (
    <Layout
      navbar={true}
      content={
        <main>
          <div className={styles["container"]}>
            <div className={styles["heading"]}>
              <h1>BOSM</h1>
            </div>
            <div className={styles["heroWrapper"]}>
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
            </div>
          </div>
        </main>
      }
    />
  );
};

export default IndexPage;

export const Head = () => <title>BOSM 2023</title>;
