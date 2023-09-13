import React, { useEffect, useState } from "react";
import arrow2 from "../images/arrow.svg";
import Cursor from "../images/cursor.png";
import { navigate } from "gatsby";
import * as classes from "../Styles/ignition.module.css";
import arrow from "../images/arrow-up-right.svg";
import logo from "../images/logo.svg";
import LoaderVideo from "../images/loader.mp4";

const Ignition = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);

  const closeButtonHandler = () => {
    navigate("/");
    document.body.style.height = "1600vh";
  };

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorCircle = document.getElementById("cursorFollower");

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

  useEffect(() => {
    if (window.innerWidth > 1160) {
      let scrollContainer = document.getElementById("gamesContainer");
      let backBtn = document.getElementById("backBtn");
      let nextBtn = document.getElementById("nextBtn");

      let isScrolling = false;

      const scrollSpeed = 5;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const scrollDistance = 0.27 * window.innerWidth;

      const handleWheel = (e) => {
        e.preventDefault();
        if (!isScrolling) {
          performScroll(e.deltaY * scrollSpeed);
        }
      };

      const performScroll = (scrollAmount) => {
        isScrolling = true;

        const targetScrollLeft = scrollContainer.scrollLeft + scrollAmount;
        const start = scrollContainer.scrollLeft;
        const change = targetScrollLeft - start;
        const duration = 800;

        let startTime;

        const animateScroll = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const elapsedTime = currentTime - startTime;

          const easedScrollLeft = easeInOutQuad(
            elapsedTime,
            start,
            change,
            duration
          );

          scrollContainer.scrollLeft = easedScrollLeft;

          if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
          } else {
            isScrolling = false;
            updateButtonState();
          }
        };

        requestAnimationFrame(animateScroll);
      };
      const updateButtonState = () => {
        if (scrollContainer.scrollLeft >= maxScroll) {
          nextBtn.style.opacity = "0.5";
          nextBtn.style.pointerEvents = "none";
        } else {
          nextBtn.style.opacity = "1";
          nextBtn.style.pointerEvents = "auto";
        }

        if (scrollContainer.scrollLeft <= 0) {
          backBtn.style.opacity = "0.5";
          backBtn.style.pointerEvents = "none";
        } else {
          backBtn.style.opacity = "1";
          backBtn.style.pointerEvents = "auto";
        }
      };
      // const handleNextClick = () => {
      //   performScroll(scrollDistance);
      // };

      // const handleBackClick = () => {
      //   performScroll(-scrollDistance);
      // };
      const handleNextClick = () => {
        if (!isScrolling) {
          // setIsScrolling(true);
          performScroll(scrollDistance, () => {
            // setIsScrolling(false);
          });
        }
      };

      const handleBackClick = () => {
        if (!isScrolling) {
          // setIsScrolling(true);
          performScroll(-scrollDistance, () => {
            // setIsScrolling(false);
          });
        }
      };


      nextBtn.addEventListener("click", handleNextClick);
      backBtn.addEventListener("click", handleBackClick);
      scrollContainer.addEventListener("wheel", handleWheel);
      updateButtonState();
      setIsLoading(false);
      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
        nextBtn.removeEventListener("click", handleNextClick);
        backBtn.removeEventListener("click", handleBackClick);
      };
    }
  }, [isLoading]);


  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }


  const [videoLoaded, setIsVideoLoaded] = useState(false)

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
    if (videoLoaded) {
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
    }
  }, [videoLoaded]);

  useEffect(() => {
    document.body.style.height = "fit-content";
  }, []);

  return (
    <React.Fragment>
      {isLoading2 && <div className="loader" id="loader">
        <video autoPlay loop muted playsInline>
          <source src={LoaderVideo} type="video/mp4" />
        </video>
      </div>}
      <div className="cursor" id="cursor"></div>
      <div className="cursorFollower" id="cursorFollower">
        <img id="cursorImg" src={Cursor} alt=""></img>
      </div>
      <section className={classes.section}>
        <div className={classes.header}>
          <img
            alt=""
            src={arrow2} onClick={closeButtonHandler} aria-hidden="true" 
          />
          <h2>
            IGNITION <span>2023</span>
          </h2>
          <img alt="" src={arrow2} style={{ visibility: "hidden", pointerEvents: "none" }} />
        </div>
        <div className={classes.gameWrapper}>
          <div className={classes.backBtn} id="backBtn">

            <img alt="" src={arrow}></img>
          </div>
          <div className={classes.gamesContainer} id="gamesContainer">
            <div className={classes.divContainer}>
              <a href="https://forms.gle/7AjX9fUz3nUTByaf9" target="_blank" rel="noopener noreferrer">
                <div className={classes.gameGroup}>
                  <div className={`${classes.game} ${classes.cr}`}>
                    <div className={classes.arrowContainer}>
                      <img alt="" src={arrow} />
                    </div>
                  </div>
                  <p>Clash Royale</p>
                </div>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXc_J3-2JaAUfnSjjTCgvue5QTCIA03n6XG0_cvUTnvJ5HAw/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener noreferrer">
                <div
                  className={`${classes.gameGroup} ${classes.secondGameGroup}`}
                >
                  <div className={`${classes.game} ${classes.fifa}`}>
                    <div className={classes.arrowContainer}>
                      <img alt="" src={arrow} />
                    </div>
                  </div>
                  <p>
                    {isBrowser && window.innerWidth > 1160 ? "\u00A0\u00A0" : ""}
                    FIFA '23
                    {isBrowser && window.innerWidth > 1160 ? "\u00A0\u00A0" : ""}
                  </p>
                </div>
              </a>
              <a href="https://forms.gle/AAV4ueRQ3qkaX6A76" target="_blank" rel="noopener noreferrer">
                <div className={classes.gameGroup}>
                  <div className={`${classes.game} ${classes.bgmi}`}>
                    <div className={classes.arrowContainer}>
                      <img alt="" src={arrow} />
                    </div>
                  </div>
                  <p>
                    {isBrowser && window.innerWidth > 1160
                      ? "\u00A0\u00A0\u00A0\u00A0"
                      : ""}
                    BGMI
                    {isBrowser && window.innerWidth > 1160
                      ? "\u00A0\u00A0\u00A0\u00A0"
                      : ""}
                  </p>
                </div>
              </a>
            </div>
            <div className={classes.divContainer}>
              <a href="https://forms.gle/B68J7MKrj8yUo1RF9" target="_blank" rel="noopener noreferrer">
                <div
                  className={`${classes.gameGroup} ${classes.secondGameGroup}`}
                >
                  <div className={`${classes.game} ${classes.valo}`}>
                    <div className={classes.arrowContainer}>
                      <img alt="" src={arrow} />
                    </div>
                  </div>
                  <p>
                    {isBrowser && window.innerWidth > 1160 ? "\u00A0\u00A0" : ""}
                    Valorant
                    {isBrowser && window.innerWidth > 1160 ? "\u00A0\u00A0" : ""}
                  </p>
                </div>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScdbooyH5Sd96CrO3o70psMecp7bnhxlSizOP7cY9u1GytZeA/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener noreferrer">
                <div className={`${classes.gameGroup}`}>
                  <div className={`${classes.game} ${classes.tekken}`}>
                    <div className={classes.arrowContainer}>
                      <img alt="" src={arrow} />
                    </div>
                  </div>
                  <p>
                    {isBrowser && window.innerWidth > 1160 ? "\u00A0\u00A0" : ""}
                    Tekken 7{isBrowser && window.innerWidth > 1160 ? "\u00A0\u00A0" : ""}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className={classes.nextBtn} id="nextBtn">
            <img alt="" src={arrow}></img>
          </div>
        </div>
      </section>


    </React.Fragment>
  );
};

export default Ignition;

export const Head = () => (
  <>
    <title>IGNITION | BOSM '23 </title>
    <link rel="icon" type="image/x-icon" href={logo} />
  </>
);
