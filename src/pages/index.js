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
import ContactsData from "../Components/ContactsData/Contacts.json"

const IndexPage = () => {

  const ContactsCards = ContactsData.map((contact) => {
    return (
      <ContactProfile
        name={contact.name}
        img={contact.image}
        dept={contact.department}
      />
    )
  })

  const [regPage, setRegPage] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  const isBrowser = typeof window !== "undefined"

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
    const rightSubTitle = document.getElementsByClassName(styles["rightSubTitle"]);
    const leftSubtitle = document.getElementsByClassName(styles["leftSubTitle"]);
    const heading = document.getElementsByClassName(styles["heading"]);

    if (!isBrowser) {
      return;
    }

    window.scrollTo(0, 0);

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

        cursorCircle.animate(
          {
            left: `${_clientX}px`,
            top: `${_clientY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      };
      const handleScroll = () => {
        if (statue) {
          const position = window.scrollY;
          const statueHeight = 75 + (position / 20);
          const contactRadius = 150 - (position / 5);
          const statueLeft = 5 + (position / 80);
          const backStatueLeft = -15 + (position / 200);
          const contactPageTop = 50 - (position / 15);
          const contactScale = 1 + (position / 1000);
          // console.log(backStatueLeft);  //-10.5
          // console.log(statueLeft);      //16.25
          // const backStatueLeft = -20 + (position / 100);


          cursorImg.style.transform = `rotate(${position / 5}deg)`;
          statue.style.height = `${statueHeight}%`;
          if (position <= window.innerHeight) {
            statueContainer.style.position = "fixed";
            contactPage.style.borderRadius = '50%';
          }
          else {
            statueContainer.style.position = "absolute";
          }
          if (position <= (window.innerHeight - 20)) {
            if (contactRadius > 0) {
              contactPage.style.borderRadius = `${contactRadius}%`;
            }
            else {
              contactPage.style.borderRadius = 0;
            }
            // contactPage.style.transform = `scale(${contactScale})`;

          }
          else {
            contactPage.style.borderRadius = 0;
            // contactPage.style.transform = `scale(1)`;
          }
          if (position <= (window.innerHeight - 1)) {
            contactContent.style.transform = 'translateX(60vw)';
            contactContent.style.opacity = 0;
            frontStatue.style.left = '-40vw';
            backStatue.style.left = '-60vw';
            contactPage.style.top = `${contactPageTop}vh`;
            // contactPage.style.transform = `scale(${contactScale})`;

          }
          else {
            frontStatue.style.left = '14.15vw';
            backStatue.style.left = '-10.5vw';
            contactPage.style.top = 0;
            contactContent.style.opacity = 1;
            contactContent.style.transform = 'translateX(0)';
            // contactPage.style.transform = `scale(1)`;
          }
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    if (window.innerWidth <= 920) {
      const handleScroll = () => {
        if (statue) {
          const position = window.scrollY;
          const statueHeight = 68 + (position / 20);
          const contactRadius = 150 - (position / 5);
          const contactPageTop = 50 - (position / 15);
          const blur = (position / 30)


          cursorImg.style.transform = `rotate(${position / 5}deg)`;
          statueMobile.style.height = `${statueHeight}%`;

          if (position > 100) {
            fixedBG[0].style.filter = `blur(${blur}px)`;
            fixedBG[0].style.transform = 'scale(1.1)';
            rightLion[0].style.filter = `blur(${blur}px)`;
            leftLion[0].style.filter = `blur(${blur}px)`;
            countDown[0].style.filter = `blur(${blur}px)`;
            rightSubTitle[0].style.filter = `blur(${blur}px)`;
            leftSubtitle[0].style.filter = `blur(${blur}px)`;
            heading[0].style.filter = `blur(${blur}px)`;
            statueMobile.style.filter = `blur(${blur}px)`;
          }
          else {
            fixedBG[0].style.filter = 'blur(0)';
            fixedBG[0].style.transform = 'scale(1)';
            rightLion[0].style.filter = 'blur(0)';
            leftLion[0].style.filter = 'blur(0)';
            countDown[0].style.filter = 'blur(0)';
            leftSubtitle[0].style.filter = 'blur(0)';
            rightSubTitle[0].style.filter = 'blur(0)';
            heading[0].style.filter = 'blur(0)';
            statueMobile.style.filter = 'blur(0)';
          }

          if (position <= window.innerHeight) {
            statueContainer.style.position = "fixed";
            contactPage.style.borderRadius = '50%';
          }
          else {
            statueContainer.style.position = "absolute";
          }
          if (position <= (window.innerHeight - 20)) {
            if (contactRadius > 0) {
              contactPage.style.borderRadius = 0;
            }
            else {
              contactPage.style.borderRadius = 0;
            }

          }
          else {
            contactPage.style.borderRadius = 0;
          }
          if (position <= (window.innerHeight - 50)) {
            contactContent.style.transform = 'translateY(85vw)';
            contactContent.style.opacity = 0;
            backStatue.style.opacity = 0;
            backStatueMobile.style.opacity = 0;
            contactPage.style.top = 0;
            // backStatue.style.left = '-75vw';

          }
          else {
            backStatue.style.left = '-10.5vw';
            backStatue.style.opacity = 1;
            backStatueMobile.style.opacity = 1;
            contactPage.style.top = 0;
            contactContent.style.transform = 'translateY(0)';
            contactContent.style.opacity = 1;
          }
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      window.onpointermove = null;
      window.scrollTo(0, 0);
    };
  }, [regPage, showBlackScreen])
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(isHamOpen);

  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);

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
        delay: isLoaded ? 1 : 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const leftLionVariants = {
    hidden: {
      opacity: 1,
      x: window.innerWidth > 711 ? "-25vw" : "-100vw",
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
        delay: isLoaded ? 1 : 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const leftHeadingVariants = {
    hidden: {
      opacity: 1,
      x: window.innerWidth > 711 ? "-26vw" : "-100vw",
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
        delay: isLoaded ? 1 : 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightLionVariants = {
    hidden: {
      opacity: 1,
      x: window.innerWidth > 711 ? "25vw" : "100vw",
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
        delay: isLoaded ? 1 : 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightHeadingVariants = {
    hidden: {
      opacity: 1,
      x : window.innerWidth > 711 ? "26vw" : "100vw",
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
        delay: isLoaded ? 1 : 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const leftTextVariants = {
    hidden: {
      opacity: 1,
      x: window.innerWidth > 711 ? "-25vw" : "-100vw",
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
        delay: isLoaded ? 1 : 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightTextVariants = {
    hidden: {
      opacity: 1,
      x: window.innerWidth > 711 ? "25vw" : "100vw",
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
        delay: isLoaded ? 1 : 2,
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
        delay: isLoaded ? 1 : 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursorFollower" id="cursorFollower">
        <img id="cursorImg" src={Cursor}></img>
      </div>
      {showBlackScreen && (
        <div className="blackScreen">
          <img src={logo} />
        </div>
      )}
      {!regPage && (
        <Layout
          setRegPage={setRegPage}
          setShowBlackScreen={setShowBlackScreen}
          isHamOpen={isHamOpen}
          setIsHamOpen={setIsHamOpen}
          navbar={true}
          fixedbg={true}
          overflow={false}
          content={
            <main>
              <motion.div
                className={styles["statueContainer"]}
                id="statueContainer"
                initial={{ y: [600] }}
                animate={isHamOpen ? "hidden" : "visible"}
                variants={statueVariants}
              >
                <img
                  id="statue"
                  src={Statue}
                  className={`${styles["statue"]} ${styles["desktopStatue"]}`}
                />
                <img
                  id="statueMobile"
                  src={MobileStatue}
                  className={`${styles["statue"]} ${styles["mobileStatue"]}`}
                />
              </motion.div>
              <motion.div
                className={styles["leftLion"]}
                initial={{ opacity: [0], x: [100] }}
                animate={isHamOpen ? "hidden" : "visible"}
                variants={leftLionVariants}
              >
                <img src={LeftLion} />
              </motion.div>
              <motion.div
                className={styles["rightLion"]}
                initial={{ opacity: [0], x: [-100] }}
                animate={isHamOpen ? "hidden" : "visible"}
                variants={rightLionVariants}
              >
                <img src={RightLion} />
              </motion.div>
              <div className={styles["container"]}>
                <motion.div
                  className={styles["heading"]}
                //   initial={{ opacity: [0] }}
                //   animate={{ opacity: [0, 1] }}
                //   transition={{
                //     delay: "2",
                //     duration: "1",
                //     ease: "easeInOut",
                //     times: [0, 1],
                //   }}
                >
                  <>
                    <motion.span
                      initial={{ opacity: [0] }}
                      animate={isHamOpen ? "hidden" : "visible"}
                      variants={leftHeadingVariants}
                    >
                      BO
                    </motion.span>
                    <motion.span
                      initial={{ opacity: [0] }}
                      animate={isHamOpen ? "hidden" : "visible"}
                      variants={rightHeadingVariants}
                    >
                      SM
                    </motion.span>
                  </>
                </motion.div>
                <motion.div
                  className={styles["leftSubTitle"]}
                  initial={{ opacity: [0] }}
                  animate={isHamOpen ? "hidden" : "visible"}
                  variants={leftTextVariants}
                >
                  <h1>The</h1>
                  <h2>ROAR</h2>
                </motion.div>

                <motion.div
                  className={styles["rightSubTitle"]}
                  initial={{ opacity: [0] }}
                  animate={isHamOpen ? "hidden" : "visible"}
                  variants={rightTextVariants}
                >
                  <h1>of</h1>
                  <h2>RESILIENCE</h2>
                </motion.div>

                {/* Hero Wrapper */}
                <motion.div className={styles["heroWrapper"]}></motion.div>

                {/* Countdown */}
                <motion.div
                  className={styles["countDown"]}
                  initial={{ opacity: [0] }}
                  animate={isHamOpen ? "hidden" : "visible"}
                  variants={countdownVariants}
                >
                  <Countdown />
                </motion.div>
              </div>
            </main>
          }
        />
      )}
      {/* <Layout 
            navbar={false}
            fixedbg={false}
            id
            content={
                <main></main>
            }
            /> */}
      {!regPage && (
        <Layout
          overflow={false}
          navbar={false}
          fixedbg={false}
          sectionId='contact-section'
          content={
            <main
              id="contactPage"
              className={contact["page"]}
              style={{ top: "50vh" }}
            >
              <div id="contactContainer" className={contact["container"]}>
                <div className={contact["pageBackground"]}>
                  <img
                    id="frontStatue"
                    src={FrontStatue}
                    className={contact["frontStatue"]}
                  />
                  <img
                    id="backStatue"
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
                  style={{ transform: "translateX(60vw)" }}
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
      {regPage && (
        <Layout
          overflow={true}
          navbar={false}
          fixedbg={false}
          content={<Form setRegPage={setRegPage} />}
        />
      )}
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
