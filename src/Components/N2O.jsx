import React from "react";

import bosm_logo from "../images/N2O-BOSM-LOGO.png";
import rahul_dua from "../images/rahul-dua.png";
import sorabh_pant from "../images/sorabh.png";

import * as styles from "../Styles/N2O.module.css";

import gsap from "gsap";

export default function N2O() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.texture}></div>
      <div className={styles.logo}>
        <img
          src={bosm_logo}
          alt="BOSM Logo"
          onClick={() => {
            gsap.to(window, {
              scrollTo: `0`,
              duration: 3,
            });
          }}
        />
      </div>
      <div className={styles.bosmMid}>
        <span className={`${styles.text} ${styles.mid}`}>BOSM'23</span>
        <span
          className={`${styles.text} ${styles.mid} ${styles.textRotateMid}`}
        >
          BOSM'23
        </span>
      </div>
      <div className={styles.rahul}>
        <div className={styles.rahulContainer}>
          <img src={rahul_dua} alt="Rahul Dua" />
        </div>
      </div>
      <div className={styles.bosmLarge}>
        <div className={styles.flexTextContainer}>
          <span className={`${styles.text} ${styles.large}`}>BOSM'23</span>
        </div>
        <div className={styles.flexTextContainer}>
          <span
            className={`${styles.text} ${styles.large} ${styles.textRotateLarge}`}
          >
            BOSM'23
          </span>
        </div>
      </div>
      <div className={styles.bosmSmall}>
        <div className={styles.flexTextContainer}>
          <span className={`${styles.text} ${styles.small}`}>BOSM'23</span>
        </div>
        <div className={styles.flexTextContainer}>
          <span
            className={`${styles.text} ${styles.small} ${styles.textRotateSmall}`}
          >
            BOSM'23
          </span>
        </div>
      </div>
      <div className={styles.bosmSmall2}>
        <div className={styles.flexTextContainer}>
          <span className={`${styles.text} ${styles.small}`}>BOSM'23</span>
        </div>
        <div className={styles.flexTextContainer}>
          <span
            className={`${styles.text} ${styles.small} ${styles.textRotateSmall}`}
          >
            BOSM'23
          </span>
        </div>
      </div>
      <div className={styles.n2o}>
        <span className={styles.n2oText}>N2O</span>
        <span className={styles.rahulText}>Rahul Dua</span>
      </div>
      <div className={styles.sorabh}>
        <div className={styles.sorabhContainer}>
          <img src={sorabh_pant} alt="Sorabh Pant" />
        </div>
      </div>
      <div className={styles.date}>
        <span className={styles.sorabhText}>Sorabh Pant</span>
        <div className={styles.dateContainer}>
          <span className={styles.dateNumber}>26</span>
          <div className={styles.dateLater}>
            <span className={styles.dateMonth}>Sep</span>
            <span className={styles.dateMonth}>TEM</span>
            <span className={styles.dateMonth}>BER</span>
            <span>TH</span>
          </div>
        </div>
      </div>
      <div className={styles.rahulTextMobile}>Rahul Dua</div>
      <div className={styles.n2oTextMobile}>N2O</div>
    </div>
  );
}
