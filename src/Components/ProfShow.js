import React from 'react';
import * as styles from '../Styles/ProfShow.module.css';
import Logo from "../images/whiteLogo.svg";
import ArrowsRight from "../images/ArrowsRight.svg";
import ArrowsLeft from "../images/ArrowsLeft.svg";
import Benny from "../images/benny.png";
import BennyMobile from "../images/bennydayal.png"
import stars from "../images/stars.svg";
import Waves from "../images/Waves.svg";
import Cross from "../images/cross.svg";
import texture from "../images/profTexture.png";

import gsap from 'gsap';

const ProfShow = () => {
    return (
        <main className={styles["profShowPage"]}>
            <div className={styles["marqueeBG"]}>
                <div className={styles['textureContainer']}><img alt='' className={styles['texture']} src={texture}></img></div>
                <span className={styles["marquee1"]}>
                    BENNYBENNY
                </span>
                <span className={styles["marquee2"]}>DAYALDAYAL</span>

                <div className={styles["heading"]}>
                    <div className={styles["headingText"]}><span className={styles['headingBenny']}>BENNY</span>DAYAL
                        <div className={styles["content"]}>
                            <div className={styles["contentRight"]}>
                                <img src={ArrowsRight} alt='loading'></img>
                                <div className={styles['para']}>
                                    PAPPU CAN’T DANCE<br />
                                    AADAT SE MAJBOOR<br />
                                    THE DISCO SONG<br />
                                    LAT LAG GAYI<br />
                                    BADTAMEEZ DIL<br />
                                    BESHARMI KI HEIGHT<br />
                                    BANG BANG<br />
                                    LET’S NACHO<br />
                                    JAI JAI SHIVSHANKAR<br />
                                </div>
                            </div>
                            <div className={styles["contentLeft"]}>
                                <div className={styles["contentTop"]}>
                                    25TH
                                </div>
                                <div className={styles["contentBottom"]}>
                                    <img src={ArrowsLeft} alt='loading'></img>
                                    SEPTEMBER
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["headingLogo"]}>
                        <img src={Logo} alt='BOSM' aria-hidden="true" onClick={() => {
                            gsap.to(window, {
                                  scrollTo: `0`,
                                  duration: 2,
                                });
                        }}></img>
                    </div>
                </div>
                <div className={styles['benny']}>
                    <img src={Benny} alt='Benny Dayal'></img>
                </div>
                <div className={styles['bennyMobile']}>
                    <img src={BennyMobile} alt='Benny Dayal'></img>
                </div>
                <div className={styles['starRight']}>
                    <img src={stars} alt='stars'></img>
                </div>
                <div className={styles['starTop']}>
                    <img src={stars} alt='stars'></img>
                </div>
                <div className={styles['starMiddle']}>
                    <img src={stars} alt='stars'></img>
                </div>
                <div className={styles['starBottom']}>
                    <img src={stars} alt='stars'></img>
                </div>
                <div className={styles['waves']}>
                    <img src={Waves} alt='waves'></img>
                </div>
                <div className={styles['cross']}>
                    <img src={Cross} alt='X'></img>
                    <div className={styles['crossContent']}>
                        <img src={Cross} alt='X'></img>
                        <div className={styles['bollywood']}>
                            BOLLYWOOD<br />
                            NIGHT
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProfShow