import React , {useEffect} from "react";
import cross from "../images/cross.svg";
import Cursor from "../images/cursor.png";
import { navigate } from "gatsby";
import * as classes from "../Styles/ignition.module.css";
import arrow from "../images/arrow-up-right.svg";

const Ignition = props => {

    const closeButtonHandler = () => {
        navigate("/");
    };


    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const cursorCircle = document.getElementById("cursorFollower");
        const cursorImg = document.getElementById("cursorImg");
        
        if (window.innerWidth > 1000) {
            window.onpointermove = (event) => {
                const { clientX, clientY } = event;

                cursor.style.display = "block";
                cursorCircle.style.display = "block";
                cursor.style.opacity = "1";
                cursorCircle.style.opacity = "1";
                cursor.style.left = `${clientX}px`;
                cursor.style.top = `${clientY}px`;

                let _clientX = clientX - 52;
                let _clientY = clientY - 52;

                cursorCircle.animate(
                    {
                        left: `${_clientX}px`,
                        top: `${_clientY}px`,
                    },
                    { duration: 500, fill: "forwards" }
                );
            };
        }
        return () => {
            window.onpointermove = null;
            window.scrollTo(0,0);
        };
    }, [])

    return <React.Fragment>
        <div className="cursor" id="cursor"></div>
        <div className="cursorFollower" id="cursorFollower"><img id="cursorImg" src={Cursor}></img></div>
        <section className={classes.section}>
            <div className={classes.header}>
                <img src={cross} style={{visibility: 'hidden' , pointerEvents: 'none'}} />
                <h2>IGNITION 2023</h2>
                <img src={cross} onClick={closeButtonHandler} />
            </div>
            <div className={classes.gamesContainer}>
                <div className={classes.gameGroup}>
                    <div className={classes.game}>
                        <div className={classes.arrowContainer}><img src={arrow} /></div>
                    </div>
                    <p>COD Mobile</p>
                </div>
                <div className={classes.gameGroup}>
                    <div className={classes.game}>
                        <div className={classes.arrowContainer}><img src={arrow} /></div>
                    </div>
                    <p>COD Mobile</p>
                </div>
                <div className={classes.gameGroup}>
                    <div className={classes.game}>
                        <div className={classes.arrowContainer}><img src={arrow} /></div>
                    </div>
                    <p>COD Mobile</p>
                </div>
            </div>
        </section>
    </React.Fragment>
};

export default Ignition;