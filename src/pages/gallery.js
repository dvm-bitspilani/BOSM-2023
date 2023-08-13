import React from "react";
import * as styles from "../Styles/Gallery.module.css";
import Layout from "../Components/Layout";

const Gallery = props => {

    return(
        <>
            <main 
                className={styles["gallery"]}
                isHamOpen={false}>
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
            </main>
        </>
    );
};

export default Gallery;