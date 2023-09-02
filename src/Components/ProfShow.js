import React, { useEffect } from 'react';
import * as prof from '../Styles/ProfShow.module.css';
import Logo from "../images/whiteLogo.svg";
import ArrowsRight from "../images/ArrowsRight.svg";
import ArrowsLeft from "../images/ArrowsLeft.svg";
import Benny from "../images/benny.png";
import BennyMobile from "../images/bennydayal.png"
import stars from "../images/stars.svg";
import Waves from "../images/Waves.svg";
import Cross from "../images/cross.svg";
import texture from "../images/profTexture.png";

const ProfShow = () => {
    return (
        <main className={prof["profShowPage"]}>
            <div className={prof["marqueeBG"]}>
                <div className={prof['textureContainer']}><img className={prof['texture']} src={texture}></img></div>
                <span className={prof["marquee1"]}>
                    BENNYBENNY
                </span>
                <span className={prof["marquee2"]}>DAYALDAYAL</span>

                <div className={prof["heading"]}>
                    <div className={prof["headingText"]}><span className={prof['headingBenny']}>BENNY</span>DAYAL
                        <div className={prof["content"]}>
                            <div className={prof["contentRight"]}>
                                <img src={ArrowsRight} alt='loading'></img>
                                <div className={prof['para']}>
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
                            <div className={prof["contentLeft"]}>
                                <div className={prof["contentTop"]}>
                                    25TH
                                </div>
                                <div className={prof["contentBottom"]}>
                                    <img src={ArrowsLeft} alt='loading'></img>
                                    SEPTEMBER
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={prof["headingLogo"]}>
                        <img src={Logo} alt='BOSM' onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }}></img>
                    </div>
                </div>
                <div className={prof['benny']}>
                    <img src={Benny} alt='Benny Dayal'></img>
                </div>
                <div className={prof['bennyMobile']}>
                    <img src={BennyMobile} alt='Benny Dayal'></img>
                </div>
                <div className={prof['starRight']}>
                    <img src={stars} alt='stars'></img>
                </div>
                <div className={prof['starTop']}>
                    <img src={stars} alt='stars'></img>
                </div>
                <div className={prof['starMiddle']}>
                    <img src={stars} alt='stars'></img>
                </div>
                <div className={prof['starBottom']}>
                    <img src={stars} alt='stars'></img>
                </div>
                <div className={prof['waves']}>
                    <img src={Waves} alt='waves'></img>
                </div>
                <div className={prof['cross']}>
                    <img src={Cross} alt='X'></img>
                    <div className={prof['crossContent']}>
                        <img src={Cross} alt='X'></img>
                        <div className={prof['bollywood']}>
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