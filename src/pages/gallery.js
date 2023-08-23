import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import * as styles from "../Styles/Gallery.module.css";
// import Layout from "../Components/Layout";
import Cursor from "../images/cursor.png";
import "../Styles/globals.css";
// import arrow2 from "../images/arrow.svg";
import { navigate } from "gatsby";
import LoaderVideo from "../images/loader.mp4";
import logo from "../images/logo.svg";
import chess from "../images/Gallery/chess.png"
import image1 from "../images/Gallery/image1.png"
import image2 from "../images/Gallery/image2.png"
import image3 from "../images/Gallery/image3.png"
import image4 from "../images/Gallery/image4.png"
import image5 from "../images/Gallery/image5.png"
import image6 from "../images/Gallery/image6.png"
import image7 from "../images/Gallery/image7.png"
import image8 from "../images/Gallery/image8.png"
import image9 from "../images/Gallery/image9.png"
import image10 from "../images/Gallery/image10.png"
import image11 from "../images/Gallery/image11.png"
import image12 from "../images/Gallery/image12.png"
import image13 from "../images/Gallery/image13.png"
import image14 from "../images/Gallery/image14.png"
import image15 from "../images/Gallery/image15.png"
import image16 from "../images/Gallery/image16.png"
import image17 from "../images/Gallery/image17.png"

import ErrorScreen from "../Components/ErrorComponent";
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useTransform,
  useSpring,
  useScroll
} from "framer-motion"


const Gallery = (props) => {
  const { scrollY } = useScroll();
  // const y2 = useTransform(scrollY, [0, 2000], [-10, 190]);
  // const y3 = useTransform(scrollY, [0, 2000], [10, 210]);
  // const y4 = useTransform(scrollY, [0, 2000], [0, 200]);
  // const y5 = useTransform(scrollY, [0, 2000], [-20, 180]);
  // const y7 = useTransform(scrollY, [0, 2000], [-30, 170]);
  // const y8 = useTransform(scrollY, [0, 2000], [-70, 130]);
  // const y9 = useTransform(scrollY, [0, 2000], [-70, 130]);
  // const y10 = useTransform(scrollY, [0, 2000], [-30, 170]);

  const [error, setError] = useState(false);

  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [videoLoaded, setIsVideoLoaded] = useState(false);

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

    document.body.style.height = "fit-content";

    return cleanup;
  }, []);
  useEffect(() => {
    if (videoLoaded) {
      const assets = document.querySelectorAll("img", "font", "style");

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
    }
  }, [videoLoaded]);

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
    const handleScroll = () => {
      const position = window.scrollY;
      cursorImg.style.transform = `rotate(${position / 5}deg)`;
      return () => {
        window.onpointermove = null;
        window.scrollTo(0, 0);
      };
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    setIsLoading(false);
    return () => {
      window.onpointermove = null;
      window.scrollTo(0, 0);
    };
  }, [isLoading]);

  const closeButtonHandler = () => {
    navigate("/");
    document.body.style.height = "400vh";
  };

  const boxes = () => {
    for (let i = 1; i <= 27; i++) {
      <div className={styles[`box${i}`]}>
        <img
          src={`img${i}`}
          alt="not found"
          className={styles["image"]}
          draggable={false}
        />
      </div>
    }
  }

  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)


  return (
    <>
      {" "}
      <div className="cursor" id="cursor"></div>
      <div className="cursorFollower" id="cursorFollower">
        <img id="cursorImg" src={Cursor} alt=""></img>
      </div>
      {isLoading2 && (
        <div className="loader" id="loader">
          <video autoPlay loop muted playsInline>
            <source src={LoaderVideo} type="video/mp4" />
          </video>
        </div>
      )}
      {error && <ErrorScreen />}
      <main className={styles["gallery"]} isHamOpen={false}>
        <div className={styles["wrapper"]}>
          <div className={styles["heading"]}>
          <div className={styles["arrow"]} onClick={closeButtonHandler}>
                <svg
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M75 39H3M3 39L39 75M3 39L39 3"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div style={{ overflowX: "hidden" }}>
                <p className={styles["title"]}>GALLERY</p>
              </div>
              <div className={styles["dummy"]}></div>

          </div>
          <motion.div
            ref={scrollRef}
            style={{ x: spring }}
            className={styles["gridContainer"]}>
            <div className={styles["box1"]}>
              <img
                src={chess}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box2"]}>
              <img
                src={image1}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box3"]}>
              <img
                src={image2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box4"]}>
              <img
                src={image3}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box5"]}>
              <img
                src={image4}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box6"]}>
              <img
                src={image5}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box7"]}>
              <img
                src={image6}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box8"]}>
              <img
                src={image7}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box9"]}>
              <img
                src={image8}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box10"]}>
              <img
                src={image9}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box11"]}>
              <img
                src={image10}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box12"]}>
              <img
                src={image11}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box13"]}>
              <img
                src={image12}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box14"]}>
              <img
                src={image13}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box15"]}>
              <img
                src={image14}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box16"]}>
              <img
                src={image15}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box17"]}>
              <img
                src={image16}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box18"]}>
              <img
                src={image17}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            {/* <div className={styles["box19"]}>
              <img
                src={image18}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box20"]}>
              <img
                src={img2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box21"]}>
              <img
                src={img2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box22"]}>
              <img
                src={img2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box23"]}>
              <img
                src={img2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box24"]}>
              <img
                src={img2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box25"]}>
              <img
                src={img2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box26"]}>
              <img
                src={img2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box27"]}>
              <img
                src={img2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div> */}
          </motion.div>
          {/* <div className={styles["tagline"]}>roar of resilience</div> */}
          <div className={styles["progressLine"]}>
          <motion.div
            className={styles["progressBar"]}
            style={{ scaleX: scrollYProgress }}
          /></div>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} className={styles["ghost"]} />
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
