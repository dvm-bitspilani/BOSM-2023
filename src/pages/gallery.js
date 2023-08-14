import React from "react";
import * as styles from "../Styles/Gallery.module.css";
import Layout from "../Components/Layout";
import Cursor from "../images/cursor.png";
import "../Styles/globals.css"
import { useState, useEffect } from "react";
import arrow2 from "../images/arrow.svg";
import { navigate } from "gatsby";
const Gallery = props => {

    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
        return () => {
            window.onpointermove = null;
            window.scrollTo(0, 0);
        };
    }, [isLoading]);

    const closeButtonHandler = () => {
        navigate("/");
    };


    return (
        <>  <div className="cursor" id="cursor"></div>
            <div className="cursorFollower" id="cursorFollower">
                <img id="cursorImg" src={Cursor} alt=""></img>
            </div>
            <main
                className={styles["gallery"]}
                isHamOpen={false}>

                <div className={styles["wrapper"]}>
                    <img
                        src={arrow2} onClick={closeButtonHandler}
                    />
                    <div className={styles["gridContainer"]}>
                        <div className={styles["box1"]}>Gallery</div>
                        <div className={styles["box2"]}></div>
                        <div className={styles["box3"]}></div>
                        <div className={styles["box4"]}></div>
                        <div className={styles["box5"]}></div>
                        <div className={styles["box6"]}>
                            <p className={styles["aboutHeading"]}>about</p>
                            <p className={styles["aboutText"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie posuere eros, vitae bibendum lorem. Quisque volutpat eget lacus sit amet commodo. Fusce condimentum, neque vel accumsan finibus, felis nisi suscipit </p>
                        </div>
                        <div className={styles["box7"]}></div>
                        <div className={styles["box8"]}></div>
                        <div className={styles["box9"]}></div>
                        <div className={styles["box10"]}></div>
                    </div>
                    <div className={styles["tagline"]}>roar of resilience</div>
                </div>
            </main>
        </>
    );
};

export default Gallery;