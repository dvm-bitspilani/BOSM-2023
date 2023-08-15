import React from "react";
import * as styles from "../Styles/Gallery.module.css";
import Layout from "../Components/Layout";
import Cursor from "../images/cursor.png";
import "../Styles/globals.css"
import { useState, useEffect, useRef } from "react";
import arrow2 from "../images/arrow.svg";
import { navigate } from "gatsby";
import LoaderVideo from "../images/loader.mp4";
import logo from "../images/logo.svg";
import img2 from "../images/Gallery/box2.png"
import img3 from "../images/Gallery/box3.png"
import img4 from "../images/Gallery/box4.png"
import img5 from "../images/Gallery/box5.png"
import img7 from "../images/Gallery/box7.png"
import img8 from "../images/Gallery/box8.png"
import img9 from "../images/Gallery/box9.png"
import img10 from "../images/Gallery/box10.png"
import ErrorScreen from "../Components/ErrorComponent";
import {
    useScroll,
    motion,
    useTransform,
    useMotionValue
} from 'framer-motion';

const Gallery = props => {

    const [error , setError] = useState(false);

    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const [videoLoaded , setIsVideoLoaded] = useState(false)

    useEffect(() => {
      const videos = document.querySelectorAll("video");
  
      let videosLoaded = 0;
  
      const handleVideoLoad = () => {
        videosLoaded++;
        if (videosLoaded === videos.length) {
          setTimeout(() => {
            setIsVideoLoaded(true);
          }, 2000);
        }
      };
  
      videos.forEach((video) => {
        if (video.readyState >= 2) {
          handleVideoLoad();
        } else {
          video.addEventListener("loadeddata", handleVideoLoad);
          video.addEventListener("error", handleVideoLoad);
        }
      });
  
      const cleanup = () => {
        videos.forEach((video) => {
          video.removeEventListener("loadeddata", handleVideoLoad);
          video.removeEventListener("error", handleVideoLoad);
        });
      };
  
      return cleanup;
    }, []);
    useEffect(() => {
      if(videoLoaded){
      const assets = document.querySelectorAll(
        "img", "font", "style"
      );
  
      let assetsLoaded = 0;
  
      const handleAssetLoad = () => {
        assetsLoaded++;
        if (assetsLoaded === assets.length) {
          setTimeout(() => {
            setIsLoading2(false);
          }, 2000);
        }
      };
  
      assets.forEach((asset) => {
        if (
          asset.complete ||
          asset.readyState === 4 ||
          asset.tagName === "LINK"
        ) {
          handleAssetLoad();
        } else {
          asset.addEventListener("load", handleAssetLoad);
          asset.addEventListener("error", handleAssetLoad);
        }
      });
  
      const cleanup = () => {
        assets.forEach((asset) => {
          asset.removeEventListener("load", handleAssetLoad);
          asset.removeEventListener("error", handleAssetLoad);
        });
      };
  
      return cleanup;
    }}, [videoLoaded]);
  




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
            {isLoading2 && <div className="loader" id="loader">
                <video autoPlay loop muted playsInline>
                <source src={LoaderVideo} type="video/mp4" />
                </video>
            </div>}
            {error && <ErrorScreen />}
            <main
                className={styles["gallery"]}
                isHamOpen={false}>

                <div className={styles["wrapper"]}>

                    <div className={styles["gridContainer"]}>
                        <div className={styles["box1"]}>
                            <div className={styles["arrow"]}><img
                                src={arrow2} onClick={closeButtonHandler}
                            /></div>
                            <p className={styles["gallery"]}>Gallery</p>
                        </div>
                        <div className={styles["box2"]}>
                            <motion.img src={img2} alt="not found" className={styles["image"]}
                            />
                        </div>
                        <div className={styles["box3"]}>
                            <motion.img src={img3} alt="not found" className={styles["image"]}
                            />
                        </div>
                        <div className={styles["box4"]}>
                            <motion.img src={img4} alt="not found" className={styles["image"]}
                            />
                        </div>
                        <div className={styles["box5"]}>
                            <motion.img src={img5} alt="not found" className={styles["image"]}
                            />
                        </div>
                        <div className={styles["box6"]}>
                            <p className={styles["aboutHeading"]}>about</p>
                            <p className={styles["aboutText"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie posuere eros, vitae bibendum lorem. Quisque volutpat eget lacus sit amet commodo. Fusce condimentum, neque vel accumsan finibus, felis nisi suscipit </p>
                        </div>
                        <div className={styles["box7"]}>
                            <motion.img src={img7} alt="not found" className={styles["image"]}
                            />
                        </div>
                        <div className={styles["box8"]}>
                            <motion.img src={img8} alt="not found" className={styles["image"]}
                            />
                        </div>
                        <div className={styles["box9"]}>
                            <motion.img src={img9} alt="not found" className={styles["image"]}                            
                            />
                        </div>
                        <div className={styles["box10"]}>
                            <motion.img src={img10} alt="not found" className={styles["image"]}
                                />
                        </div>
                    </div>
                    <div className={styles["tagline"]}>roar of resilience</div>
                </div>
            </main>
        </>
    );
};

export default Gallery;

export const Head = () => (
    <>
        <title>Gallery | BOSM '23 </title>
        <link rel="icon" type="image/x-icon" href={logo} />
    </>
);