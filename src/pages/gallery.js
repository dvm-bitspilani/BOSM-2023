import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import * as styles from "../Styles/Gallery.module.css";
// import Layout from "../Components/Layout";
import Cursor from "../images/cursor.png";
import "../Styles/globals.css";
// import arrow2 from "../images/arrow.svg";
import { navigate } from "gatsby";
import LoaderVideo from "../images/loader.mp4";
import logo from "../images/logo.svg";
import box1 from "../images/Gallery/box1.png";
import box2 from "../images/Gallery/box2.png";
import box3 from "../images/Gallery/box3.png";
import box4 from "../images/Gallery/box4.png";
import box5 from "../images/Gallery/box5.png";
import box6 from "../images/Gallery/box6.png";
import box7 from "../images/Gallery/box7.png";
import box8 from "../images/Gallery/box8.png";
import box9 from "../images/Gallery/box9.png";
import box10 from "../images/Gallery/box10.png";
import box11 from "../images/Gallery/box11.png";
import box12 from "../images/Gallery/box12.png";
import box13 from "../images/Gallery/box13.png";
import box14 from "../images/Gallery/box14.png";
import box15 from "../images/Gallery/box15.png";
import box16 from "../images/Gallery/box16.png";
import box17 from "../images/Gallery/box17.png";
import box18 from "../images/Gallery/box18.png";
import box19 from "../images/Gallery/box19.png";
import box20 from "../images/Gallery/box20.png";
import box21 from "../images/Gallery/box21.png";
import box22 from "../images/Gallery/box22.png";
import box23 from "../images/Gallery/box23.png";
import box24 from "../images/Gallery/box24.png";
import box25 from "../images/Gallery/box25.png";
import box26 from "../images/Gallery/box26.png";
import box27 from "../images/Gallery/box27.png";


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

  /// for horizontal scroll

  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 800) {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth)
      }
    }
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

  /// for vertical scroll

  const scrollXRef = useRef(null);
  const [scrollXRange, setScrollXRange] = useState(0);
  const [viewportH, setViewportH] = useState(0);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 800) {
        scrollXRef && setScrollXRange(scrollRef.current.scrollWidth)
      }
    }
  }, [scrollXRef]);

  const onResizeX = useCallback(entries => {
    for (let entry of entries) {
      setViewportH(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResizeX(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResizeX]);

  const transformX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollXRange + viewportH]
  );
  const physicsX = { damping: 15, mass: 0.27, stiffness: 55 };
  const springX = useSpring(transformX, physicsX);


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
            ref={ typeof window !== 'undefined' ? window.innerWidth > 800 ? scrollRef : scrollXRef : scrollRef}
            style={typeof window !== 'undefined' ? window.innerWidth > 800 ? { x: spring } : {y: springX} : { x: spring }}
            className={styles["gridContainer"]}>
            <div className={styles["box1"]}>
              <img
                src={box1}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box2"]}>
              <img
                src={box2}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box3"]}>
              <img
                src={box3}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box4"]}>
              <img
                src={box4}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box5"]}>
              <img
                src={box5}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box6"]}>
              <img
                src={box6}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box7"]}>
              <img
                src={box7}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box8"]}>
              <img
                src={box8}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box9"]}>
              <img
                src={box9}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box10"]}>
              <img
                src={box10}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box11"]}>
              <img
                src={box11}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box12"]}>
              <img
                src={box12}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box13"]}>
              <img
                src={box13}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box14"]}>
              <img
                src={box14}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box15"]}>
              <img
                src={box15}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box16"]}>
              <img
                src={box16}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box17"]}>
              <img
                src={box17}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box18"]}>
              <img
                src={box18}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box19"]}>
              <img
                src={box20}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box20"]}>
              <img
                src={box19}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box21"]}>
              <img
                src={box21}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box22"]}>
              <img
                src={box22}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box23"]}>
              <img
                src={box23}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box24"]}>
              <img
                src={box24}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box25"]}>
              <img
                src={box25}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box26"]}>
              <img
                src={box26}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
            <div className={styles["box27"]}>
              <img
                src={box27}
                alt="not found"
                className={styles["image"]}
                draggable={false}
              />
            </div>
          </motion.div>
          {/* <div className={styles["tagline"]}>roar of resilience</div> */}
          <div className={styles["progressLine"]}
            style={typeof window !== 'undefined' ? window.innerWidth > 800 ? { display: 'block' } : { display: 'none' } : { display: 'none' }}
          >
            <motion.div
              className={styles["progressBar"]}
              style={{ scaleX: scrollYProgress }}
            /></div>
        </div>
        <div ref={ghostRef} style={typeof window !== 'undefined' ? window.innerWidth > 800 ? { height: scrollRange } : { height: 0 } : { height: 0 }} className={styles["ghost"]} />
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
