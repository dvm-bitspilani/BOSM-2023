import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Countdown from "../Components/Countdown";
import * as styles from "../Styles/Content.module.css";
import * as contact from "../Styles/Contact.module.css";
import Statue from "../images/statue.png";
import MobileStatue from "../images/statue-mobile.png";
import RightLion from "../images/lion-blue.png";
import LeftLion from "../images/lion-red.png";
import { motion } from "framer-motion";
import Cursor from "../images/cursor.png";
import FrontStatue from "../images/statue2bright.png";
import BackStatue from "../images/statue2bg.png";
import ContactProfile from "../Components/Profile";
import BackStatueMobile from "../images/statue2bg_mobile.png";
import logo from "../images/logo.svg";
import Form from "../Components/Form";
import Girl from "../Components/ContactsData/ContactImages/contact_girl.png"
import Boy from "../Components/ContactsData/ContactImages/contact_boy.png"
import LoaderVideo from "../images/loader.mp4";
import Socials from "../Components/Socials";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    if(isLoading){
      document.documentElement.style.overflow="hidden";
    }else
    document.documentElement.style.overflow="scroll";
  },[isLoading])


  const ContactsData = [
    {
      "name": "Shreyas Sesham",
      "image": `${Boy}`,
      "department": "Publications and Correspondence",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
  
    },
    {
      "name": "Anushka Patil",
      "image": `${Girl}`,
      "department": "Controls",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
      
    },
    {
      "name": "Ayush Singh Bhandari",
      "image": `${Boy}`,
      "department": "Sponsorship and Marketing",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
  
    },
    {
      "name": "Shirish Kumaravel",
      "image": `${Boy}`,
      "department": "Reception and Accomodation",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
    },
    {
      "name": "Aditya Kumar Sriram",
      "image": `${Boy}`,
      "department": "Sports Secretary",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
    },
    {
      "name": "Anushka Shukla",
      "image": `${Girl}`,
      "department": "Join Sports Secretary",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
    },
    {
      "name": "Syed Aga Hani Riza",
      "image": `${Boy}`,
      "department": "Join Sports Secretary",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
    },
    {
      "name": "Yashwasin Jain",
      "image": `${Boy}`,
      "department": "Join Sports Secretary",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
    },
    {
      "name": "Shivang Rai",
      "image": `${Boy}`,
      "department": "Online Registrations",
      "phone": "+91-9999999999",
      "email": "abcd@pilani.bits-pilani.ac.in"
    }
  ]

  const ContactsCards = ContactsData.map((contact, key) => {
    return (
      <ContactProfile
        key={key}
        name={contact.name}
        img={contact.image}
        dept={contact.department}
      />
    );
  });

  const [regPage, setRegPage] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorCircle = document.getElementById("cursorFollower");
    const cursorImg = document.getElementById("cursorImg");
    const statueContainer = document.getElementById("statueContainer");
    const statue = document.getElementById("statue");
    const statueMobile = document.getElementById("statueMobile");
    const contactPage = document.getElementById("contactPage");
    const frontStatue = document.getElementById("frontStatue");
    const backStatue = document.getElementById("backStatue");
    const backStatueMobile = document.getElementById("backStatueMobile");
    const contactContent = document.getElementById("contactContent");
    const fixedBG = document.getElementsByClassName("fixed-bg");
    const rightLion = document.getElementsByClassName(styles["rightLion"]);
    const leftLion = document.getElementsByClassName(styles["leftLion"]);
    const countDown = document.getElementsByClassName(styles["countDown"]);
    const rightSubTitle = document.getElementsByClassName(
      styles["rightSubTitle"]
    );
    const leftSubtitle = document.getElementsByClassName(
      styles["leftSubTitle"]
    );
    const heading = document.getElementsByClassName(styles["heading"]);

    window.scrollTo(0, 0);

    // window.scroll = scroll;

    if (window.innerWidth > 920) {
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

        cursorCircle.style.left = `${_clientX}px`;
        cursorCircle.style.top = `${_clientY}px`;
      };
      const handleScroll = () => {
        if (statue) {
          const position = window.scrollY;
          const statueHeight = 75 + position / 20;
          const contactRadius = 150 - position / 5;
          const contactPageTop = 30 - position / 15;

          cursorImg.style.transform = `rotate(${position / 5}deg)`;
          statue.style.height = `${statueHeight}%`;
          if (position <= window.innerHeight) {
            statueContainer.style.position = "fixed";
            contactPage.style.borderRadius = "50%";
          } else {
            statueContainer.style.position = "absolute";
          }
          if (position <= window.innerHeight - 20) {
            if (contactRadius > 0) {
              contactPage.style.borderRadius = `${contactRadius}%`;
            } else {
              contactPage.style.borderRadius = 0;
            }
          } else {
            contactPage.style.borderRadius = 0;
          }
          if (position <= window.innerHeight * 0.5 - 1) {
            contactContent.style.transform = "translateX(60vw)";
            contactContent.style.opacity = 0;
            frontStatue.style.left = "-40vw";
            backStatue.style.left = "-60vw";
            if (contactPageTop > 0) {
              contactPage.style.top = `${contactPageTop}vh`;
            } else {
              contactPage.style.top = 0;
            }
          } else {
            frontStatue.style.left = "14.15vw";
            backStatue.style.left = "-10.5vw";
            contactPage.style.top = 0;
            contactContent.style.opacity = 1;
            contactContent.style.transform = "translateX(0)";
          }
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    if (window.innerWidth <= 920) {
      const handleScroll = () => {
        if (statue) {
          const position = window.scrollY;
          const statueHeight = 60 + position / 20;
          const contactRadius = 150 - position / 5;
          const blur = position / 50;

          cursorImg.style.transform = `rotate(${position / 5}deg)`;
          statueMobile.style.height = `${statueHeight}%`;

          if (fixedBG[0]) {
            if (position > 100) {
              fixedBG[0].style.filter = `blur(${blur}px)`;
              fixedBG[0].style.transform = "scale(1.1)";
              rightLion[0].style.filter = `blur(${blur}px)`;
              leftLion[0].style.filter = `blur(${blur}px)`;
              countDown[0].style.filter = `blur(${blur}px)`;
              rightSubTitle[0].style.filter = `blur(${blur}px)`;
              leftSubtitle[0].style.filter = `blur(${blur}px)`;
              heading[0].style.filter = `blur(${blur}px)`;
              statueMobile.style.filter = `blur(${blur}px)`;
            } else {
              fixedBG[0].style.filter = "blur(0)";
              fixedBG[0].style.transform = "scale(1)";
              rightLion[0].style.filter = "blur(0)";
              leftLion[0].style.filter = "blur(0)";
              countDown[0].style.filter = "blur(0)";
              leftSubtitle[0].style.filter = "blur(0)";
              rightSubTitle[0].style.filter = "blur(0)";
              heading[0].style.filter = "blur(0)";
              statueMobile.style.filter = "blur(0)";
            }
          }

          if (position <= window.innerHeight) {
            statueContainer.style.position = "fixed";
            contactPage.style.borderRadius = "50%";
          } else {
            statueContainer.style.position = "absolute";
          }
          if (position <= window.innerHeight - 20) {
            if (contactRadius > 0) {
              contactPage.style.borderRadius = 0;
            } else {
              contactPage.style.borderRadius = 0;
            }
          } else {
            contactPage.style.borderRadius = 0;
          }
          if (position <= window.innerHeight - 50) {
            backStatue.style.opacity = 0;
            backStatueMobile.style.opacity = 0;
            contactPage.style.top = 0;
          } else {
            backStatue.style.left = "-10.5vw";
            backStatue.style.opacity = 1;
            backStatueMobile.style.opacity = 1;
            contactPage.style.top = 0;
          }
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      window.onpointermove = null;
      window.scrollTo(0, 0);
    };
  }, [regPage, showBlackScreen, isLoading]);


  const [isHamOpen, setIsHamOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);


  const statueVariants = {
    hidden: {
      y: 650,
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      transition: {
        delay: isLoaded ? 0.5 : 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const leftLionVariants = {
    hidden: {
      opacity: 1,
      x: isBrowser && window.innerWidth > 711 ? "-25vw" : "-100vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: isLoaded ? 0.5 : 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const leftHeadingVariants = {
    hidden: {
      opacity: 1,
      x: isBrowser && window.innerWidth > 711 ? "-26vw" : "-100vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: isLoaded ? 0.5 : 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightLionVariants = {
    hidden: {
      opacity: 1,
      x: isBrowser && window.innerWidth > 711 ? "25vw" : "100vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: isLoaded ? 0.5 : 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightHeadingVariants = {
    hidden: {
      opacity: 1,
      x: isBrowser && window.innerWidth > 711 ? "26vw" : "100vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: isLoaded ? 0.5 : 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const leftTextVariants = {
    hidden: {
      opacity: 1,
      x: isBrowser && window.innerWidth > 711 ? "-25vw" : "-100vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: isLoaded ? 0.5 : 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightTextVariants = {
    hidden: {
      opacity: 1,
      x: isBrowser && window.innerWidth > 711 ? "25vw" : "100vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: isLoaded ? 0.5 : 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const countdownVariants = {
    hidden: {
      opacity: 1,
      y: 200,
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: isLoaded ? 0.5 : 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  // useEffect(() => {
  //   let video = document.querySelector('video')
  //   video.defaultPlaybackRate = 0.7
  //   video.load()
  // }, []);
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
          setIsLoading(false);
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

  const handleStatueImageDrag = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursorFollower" id="cursorFollower">
        <img id="cursorImg" src={Cursor} alt=""></img>
      </div>
      {isLoading && <div className="loader" id="loader">
        <video autoPlay loop muted playsInline>
          <source src={LoaderVideo} type="video/mp4" />
        </video>
      </div>}
      <>
        {!regPage && (
          <Layout
            setRegPage={setRegPage}
            regPage={regPage}
            setShowBlackScreen={setShowBlackScreen}
            isHamOpen={isHamOpen}
            setIsHamOpen={setIsHamOpen}
            navbar={true}
            fixedbg={true}
            overflow={false}
            content={
              <main id="landing">
                {<motion.div
                  className={styles["statueContainer"]}
                  id="statueContainer"
                  initial={{ y: [600] }}
                  animate={(isLoading || isHamOpen) ? "hidden" : "visible"}
                  variants={statueVariants}
                >
                  <img
                    id="statue"
                    src={Statue}
                    alt=""
                    className={`${styles["statue"]} ${styles["desktopStatue"]}`}
                    onDragStart={handleStatueImageDrag}
                  />
                  <img
                    id="statueMobile"
                    src={MobileStatue}
                    alt=""
                    className={`${styles["statue"]} ${styles["mobileStatue"]}`}
                  />
                </motion.div>}
                {<motion.div
                  className={styles["leftLion"]}
                  initial={{ opacity: [0], x: [100] }}
                  animate={isLoading ?"": isHamOpen ? "hidden" : "visible"}
                  variants={leftLionVariants}
                >
                  <img src={LeftLion} alt="" />
                </motion.div>}
                {<motion.div
                  className={styles["rightLion"]}
                  initial={{ opacity: [0], x: [-100] }}
                  animate={isLoading ?"": isHamOpen ? "hidden" : "visible"}
                  variants={rightLionVariants}
                >
                  <img src={RightLion} alt="" />
                </motion.div>}
                <div className={styles["container"]}>
                  <motion.div
                    className={styles["heading"]}
                  >
                    <>
                      {<motion.span
                        initial={{ opacity: [0] }}
                        animate={isLoading ?"": isHamOpen ? "hidden" : "visible"}
                        variants={leftHeadingVariants}
                      >
                        BO
                      </motion.span>}
                      {<motion.span
                        initial={{ opacity: [0] }}
                        animate={isLoading ?"": isHamOpen ? "hidden" : "visible"}
                        variants={rightHeadingVariants}
                      >
                        SM
                      </motion.span>}
                    </>
                  </motion.div>
                  {<motion.div

                    className={styles["leftSubTitle"]}
                    initial={{ opacity: [0] }}
                    animate={isLoading ?"": isHamOpen ? "hidden" : "visible"}
                    variants={leftTextVariants}
                  >
                    <h1>The</h1>
                    <h2>ROAR</h2>
                  </motion.div>}

                  {<motion.div

                    className={styles["rightSubTitle"]}
                    initial={{ opacity: [0] }}
                    animate={isLoading ?"": isHamOpen ? "hidden" : "visible"}
                    variants={rightTextVariants}
                    onAnimationComplete={() => setIsLoaded(true)}
                  >
                    <h1>of</h1>
                    <h2>RESILIENCE</h2>
                  </motion.div>}

                  {/* Hero Wrapper */}
                  <motion.div className={styles["heroWrapper"]}></motion.div>

                  {/* Countdown */}
                  {<motion.div
                    className={styles["countDown"]}
                    initial={{ opacity: [0] }}
                    animate={isLoading ?"": isHamOpen ? "hidden" : "visible"}
                    variants={countdownVariants}
                  >
                    <Countdown />
                  </motion.div>}

                  {<motion.div
                    className={styles["socials"]}
                    initial={{ opacity: [0] }}
                    animate={isLoading ?"": isHamOpen ? "hidden" : "visible"}
                    variants={countdownVariants}
                  >
                    <Socials />
                  </motion.div>}
                </div>
              </main>
            }
          />
        )}
        {!regPage && (
          <Layout
            overflow={false}
            navbar={false}
            regPage={regPage}
            fixedbg={false}
            sectionId="contact-section"
            content={
              <main

                id="contactPage"
                className={contact["page"]}
                style={{ top: "30vh" }}
              >
                <div id="contactContainer" className={contact["container"]}>
                  <div className={contact["pageBackground"]}>
                    <img
                      id="frontStatue"
                      alt=""
                      src={FrontStatue}
                      className={contact["frontStatue"]}
                    />
                    <img
                      id="backStatue"
                      alt=""
                      src={BackStatue}
                      className={contact["backStatue"]}
                    />
                    {/* <img src={BackStatueMobile} className={contact["backStatueMobile"]} /> */}
                  </div>
                  <div

                    id="backStatueMobile"
                    className={contact["backStatueMobile"]}
                    style={{ backgroundImage: `url(${BackStatueMobile})` }}
                  ></div>
                  <div

                    id="contactContent"
                    className={contact["content"]}
                  >
                    <div className={contact["contentContainer"]}>
                      <div className={contact["title"]}>CONTACT US</div>
                      <div className={contact["cardsContainer"]}>
                        {ContactsCards}
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            }
          />
        )}
        {showBlackScreen && (
          <div className="blackScreen">
            <img alt="" src={logo} />
          </div>
        )}
        {regPage && (
          <div>
            <Layout
              overflow={true}
              navbar={false}
              regPage={regPage}
              fixedbg={false}
              content={<Form setShowBlackScreen={setShowBlackScreen} setRegPage={setRegPage} />}
            />
          </div>
        )}
      </>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>BOSM '23 | The Roar of Resilience</title>
    <link rel="icon" type="image/x-icon" href={logo} />
  </>
);
