import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Countdown from "../Components/Countdown";
import * as styles from "../Styles/Content.module.css";
import * as contact from "../Styles/Contact.module.css";
import * as about from "../Styles/About.module.css";
import * as navbar from "../Styles/Navbar.module.css";
import Statue from "../images/statue.svg";
import MobileStatue from "../images/statue-mobile.png";
import RightLion from "../images/lion-blue.png";
import LeftLion from "../images/lion-red.png";
import { easeInOut, motion } from "framer-motion";
import Cursor from "../images/cursor.png";
import CursorDrag from "../images/cursordrag.png";
import FrontStatue from "../images/statue2bright.png";
import BackStatue from "../images/statue2bg.png";
import ContactProfile from "../Components/Profile";
import BackStatueMobile from "../images/statue2bg_mobile.png";
import logo from "../images/logo.svg";
import Form from "../Components/Form";
// import Girl from "../Components/ContactsData/ContactImages/contact_girl.png";
import Boy from "../Components/ContactsData/ContactImages/contact_boy.png";
import LoaderVideo from "../images/loader.mp4";
import Socials from "../Components/Socials";
import AboutUs from "../Components/AboutUs";
import Events from "../Components/Events";
// import Vidhartha from "../Components/ContactsData/ContactImages/Vidhartha.png";
import AnushkaPatil from "../Components/ContactsData/ContactImages/AnushkaPatil.png";
import AnushkaShukla from "../Components/ContactsData/ContactImages/AnushkaShukla.png";
// import Pradyut from "../Components/ContactsData/ContactImages/Pradyut.png";
import Shreyas from "../Components/ContactsData/ContactImages/Shreyas.png";
import Syed from "../Components/ContactsData/ContactImages/Syed.png";
import Ayush from "../Components/ContactsData/ContactImages/Ayush.png";
import Shirish from "../Components/ContactsData/ContactImages/shirish.jpg";
import shivang from "../Components/ContactsData/ContactImages/shivang.jpg";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cossacSwitchBtn, setCossacSwitchBtn] = useState(true);
  const [cossacCards, setCossacCards] = useState(true);

  console.log({ cossacSwitchBtn });
  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = "hidden";
    } else document.documentElement.style.overflow = "scroll";
  }, [isLoading]);

  const ContactsData1 = [
    {
      name: "Shreyas Sesham",
      image: `${Shreyas}`,
      department: "Publications and Correspondence",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Aditya Kumar Sriram",
      image: `${Boy}`,
      department: "Sports Secretary",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Shivang Rai",
      image: `${shivang}`,
      department: "Online Registrations",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
  ];

  const ContactsData2 = [
    {
      name: "Shreyas Sesham",
      image: `${Shreyas}`,
      department: "Publications and Correspondence",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Shirish Kumaravel",
      image: `${Shirish}`,
      department: "Reception and Accommodation",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Anushka Patil",
      image: `${AnushkaPatil}`,
      department: "Controls",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Ayush Singh Bhandari",
      image: `${Ayush}`,
      department: "Sponsorship and Marketing",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Aditya Kumar Sriram",
      image: `${Boy}`,
      department: "Sports Secretary",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Syed Aga Hani Riza",
      image: `${Syed}`,
      department: "Joint Sports Secretary",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Anushka Shukla",
      image: `${AnushkaShukla}`,
      department: "Joint Sports Secretary",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Yashwasin Jain",
      image: `${Boy}`,
      department: "Joint Sports Secretary",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Yashwasin Jain",
      image: `${Boy}`,
      department: "Joint Sports Secretary",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Yashwasin Jain",
      image: `${Boy}`,
      department: "Joint Sports Secretary",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
    {
      name: "Yashwasin Jain",
      image: `${Boy}`,
      department: "Joint Sports Secretary",
      phone: "+91-9999999999",
      email: "abcd@pilani.bits-pilani.ac.in",
    },
  ];

  const Card1Row1 = ContactsData1.map((contact, index) => {
    if (index >= 0 && index < 2) {
      return (
        <ContactProfile
          key={index}
          name={contact.name}
          img={contact.image}
          dept={contact.department}
          phone={contact.phone}
          email={contact.email}
        />
      );
    }
    return null;
  }).slice(0, 2);

  const Card1Row2 = ContactsData1.map((contact, index) => {
    if (index >= 2 && index < 3) {
      return (
        <ContactProfile
          key={index}
          name={contact.name}
          img={contact.image}
          dept={contact.department}
          phone={contact.phone}
          email={contact.email}
        />
      );
    }
    return null;
  }).slice(2, 3);

  const Card2Row1 = ContactsData2.map((contact, index) => {
    if (index >= 0 && index < 3) {
      return (
        <ContactProfile
          key={index}
          name={contact.name}
          img={contact.image}
          dept={contact.department}
          phone={contact.phone}
          email={contact.email}
        />
      );
    }
    return null;
  }).slice(0, 3);

  const Card2Row2 = ContactsData2.map((contact, index) => {
    if (index >= 3 && index < 6) {
      return (
        <ContactProfile
          key={index}
          name={contact.name}
          img={contact.image}
          dept={contact.department}
          phone={contact.phone}
          email={contact.email}
        />
      );
    }
    return null;
  }).slice(3, 6);

  const Card2Row3 = ContactsData2.map((contact, index) => {
    if (index >= 6 && index < 8) {
      return (
        <ContactProfile
          key={index}
          name={contact.name}
          img={contact.image}
          dept={contact.department}
          phone={contact.phone}
          email={contact.email}
        />
      );
    }
    return null;
  }).slice(6, 8);

  const ContactsCards1 = (
    <div className={contact["cardsContainer1"]}>
      <div className={contact["row"]}>{Card1Row1}</div>
      <div className={contact["row"]}>{Card1Row2}</div>
    </div>
  );

  const ContactsCards2 = (
    <div className={contact["cardsContainer2"]}>
      <div className={contact["row"]}>{Card2Row1}</div>
      <div className={contact["row"]}>{Card2Row2}</div>
      <div className={contact["row"]}>{Card2Row3}</div>
    </div>
  );

  const [regPage, setRegPage] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [showBlackScreen2, setShowBlackScreen2] = useState(false);

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".fixed-bg",
        start: "top top",
        // endTrigger: ".fixed-bg-blue",
        end: `+=${window.innerHeight}`,
        toggleActions: "play none none reverse",
        onEnter: ({ progress, direction, isActive }) => {
          if (regPage === false) {
            const aboutUsSection = document.getElementById("about-us-section");
            if (aboutUsSection) {
              aboutUsSection.style.zIndex = 2;
            }
          }
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          if (regPage === false) {
            const aboutUsSection = document.getElementById("about-us-section");
            if (aboutUsSection) {
              aboutUsSection.style.zIndex = 0;
              // aboutUsSection.style.position = "fixed";
              aboutUsSection.style.top = "0";
            }
          }
        },
        onLeave: ({ progress, direction, isActive }) => {
          if (regPage === false) {
            const aboutUsSection = document.getElementById("about-us-section");
            if (aboutUsSection) {
              // aboutUsSection.style.position = "absolute";
              // aboutUsSection.style.top = "100vh";
            }
          }
        },
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "12px",
        //   indent: 20,
        // },
        scrub: true,
        snap: {
          snapTo: 1,
          duration: 2,
          ease: "power1.out",
        },
      },
    });

    tl1
      .to(".fixed-bg-blue", {
        width: "0%",
        ease: "none",
      })
      .to(`.${styles["landing"]}`, {
        opacity: 0,
        ease: "none",
      })
      .to(
        `.${navbar["navbarContainer"]}`,
        {
          opacity: 0,
          ease: "none",
        },
        "<"
      )
      .to(
        `.${navbar["registerBtnMobile"]}`,
        {
          opacity: 0,
          ease: "none",
        },
        "<"
      )
      .to("#about-us-section", {
        opacity: 1,
        ease: "none",
        // position: "absolute",
        // top: "100vh",
      });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-us-section",
        start: `${window.innerHeight} top`,
        // endTrigger: ".fixed-bg-blue",
        end: `+=${window.innerHeight}`,
        toggleActions: "play none none reverse",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        // },
        scrub: true,
        // yoyo: true,
        snap: {
          snapTo: 1,
          duration: 2.5,
          ease: "power1.out",
        },
      },
    });

    tl2
      .to(`.${about["topContainer"]}`, {
        y: "100%",
        ease: "none",
        // duration: 1,
      })
      .to(
        `.${about["bottomContainer"]}`,
        {
          y: "-100%",
          ease: "none",
          // duration: 1,
        },
        "<"
      )
      .to(`.${about["whiteBar"]}`, {
        width: 0,
        ease: "none",
        // duration : 1,
      })
      .from("#events-section", {
        x: "210%",
        y: "60%",
        ease: "none",
        // duration : 2,
      })
      .from(
        "#eventCarousel",
        {
          rotation: 70,
          ease: "none",
          // duration : 2,
        },
        "<"
      );

    let tl3 = gsap.timeline({
      scrollTrigger: {
        // trigger: "#events-section",
        start: `${window.innerHeight * 2} top`,
        // endTrigger: ".fixed-bg-blue",
        end: `+=${window.innerHeight}`,
        toggleActions: "play none none reverse",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        // },
        scrub: true,
        // yoyo: true,
        snap: {
          snapTo: 1,
          duration: 2,
          ease: "power1.out",
        },
      },
    });

    tl3
      .to(`#events-section`, {
        y: "-100%",
        ease: "none",
        // duration: 1,
      })
      .to("#contact-section", {
        y: "-100%",
        ease: "none",
        // duration: 1,
      })
      .from(`.${contact["pageBackground"]}`, {
        x: "-100%",
        ease: "none",
        // duration: 1,
      })
      .from(
        "#contactContent",
        {
          x: "100%",
          ease: "none",
          // duration: 1,
        },
        "<"
      )
      .from(
        `.${contact["cardsSwitchButtons"]}`,
        {
          x: "100%",
          ease: "none",
          // duration: 1,
        },
        "<"
      );
  }, [regPage]);

  useEffect(() => {
    const landingSection = document.getElementById("landing-section");
    const aboutSection = document.getElementById("about-us-section");
    const eventsSection = document.getElementById("events-section");
    const contactSection = document.getElementById("contact-section");

    const cursor = document.getElementById("cursor");
    const cursorCircle = document.getElementById("cursorFollower");
    const cursorCircleDrag = document.getElementById("cursorFollowerDrag");
    const cursorImg = document.getElementById("cursorImg");
    const statueContainer = document.getElementById("statueContainer");
    const statue = document.getElementById("statue");
    const statueMobile = document.getElementById("statueMobile");
    // const contactPage = document.getElementById("contactPage");
    const frontStatue = document.getElementById("frontStatue");
    const backStatue = document.getElementById("backStatue");
    // const backStatueMobile = document.getElementById("backStatueMobile");
    // const contactContent = document.getElementById("contactContent");
    const fixedBG = document.getElementsByClassName("fixed-bg");
    const rightLion = document.getElementsByClassName(styles["rightLion"]);
    const leftLion = document.getElementsByClassName(styles["leftLion"]);
    const countDown = document.getElementsByClassName(styles["countDown"]);
    const socials = document.getElementsByClassName(styles["socialsContainer"]);
    const rightSubTitle = document.getElementsByClassName(
      styles["rightSubTitle"]
    );
    const leftSubtitle = document.getElementsByClassName(
      styles["leftSubTitle"]
    );
    const heading = document.getElementsByClassName(styles["heading"]);
    const registerBtnMobile = document.getElementById("regBtnMobile");

    const hamMenu = document.getElementById("ham-menu");
    const register = document.getElementById("register-btn");
    const bosmLogo = document.getElementById("bosm-logo");

    const aboutContainer = document.getElementsByClassName(
      about["topContainer"]
    );
    const aboutHeading = document.getElementsByClassName(about["heading"]);
    const aboutCarousel = document.getElementsByClassName(
      about["carouselContainer"]
    );
    const aboutContent = document.getElementsByClassName(
      about["contentContainer"]
    );

    if (backStatue) {
      backStatue.addEventListener("dragstart", (event) => {
        event.preventDefault();
      });
    }
    if (frontStatue) {
      frontStatue.addEventListener("dragstart", (event) => {
        event.preventDefault();
      });
    }

    window.scrollTo(0, 0);

    // window.scroll = scroll;

    if (typeof window !== "undefined" && window.innerWidth > 920) {
      window.onpointermove = (event) => {
        const { clientX, clientY } = event;

        cursor.style.display = "block";
        cursorCircle.style.display = "block";
        cursor.style.opacity = "1";
        cursorCircle.style.opacity = "1";
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
        cursorCircleDrag.style.left = `${clientX}px`;
        cursorCircleDrag.style.top = `${clientY}px`;

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
        const position = window.scrollY;
        cursorImg.style.transform = `rotate(${position / 5}deg)`;
        const visibleHeight = window.innerHeight * 1;

        const containerMargin = position + 100;

        //     if(landingSection){
        //       landingSection.style.position = "fixed";
        //     }

        //     if (rightLion[0] && statue && leftLion[0] && countDown) {
        //       if (position >= visibleHeight - 50) {
        //         rightLion[0].style.opacity = 0;
        //         leftLion[0].style.opacity = 0;
        //         countDown[0].style.opacity = 0;
        //         rightSubTitle[0].style.opacity = 0;
        //         leftSubtitle[0].style.opacity = 0;
        //         heading[0].style.opacity = 0;
        //         socials[0].style.opacity = 0;
        //         statue.style.opacity = 0;
        //         register.style.opacity = 0;
        //         hamMenu.style.opacity = 0;
        //         bosmLogo.style.opacity = 0;
        //       }
        //       else {
        //         rightLion[0].style.opacity = 1;
        //         leftLion[0].style.opacity = 1;
        //         countDown[0].style.opacity = 1;
        //         rightSubTitle[0].style.opacity = 1;
        //         leftSubtitle[0].style.opacity = 1;
        //         heading[0].style.opacity = 1;
        //         socials[0].style.opacity = 1;
        //         statue.style.opacity = 1;
        //         register.style.opacity = 1;
        //         hamMenu.style.opacity = 1;
        //         bosmLogo.style.opacity = 1;
        //       }
        //     }

        //     if (aboutContainer[0] && aboutSection) {
        //       if (position <= visibleHeight - 1) {
        //         aboutSection.style.opacity = 0;
        //         eventsSection.style.opacity = 0;
        //         contactSection.style.opacity = 0;
        //         aboutSection.style.zIndex = 0;
        //         aboutContainer[0].style.marginTop = `${containerMargin}px`;
        //         aboutHeading[0].style.opacity = 0;
        //         aboutCarousel[0].style.opacity = 0;
        //         aboutContent[0].style.opacity = 0;
        //       }
        //       else {
        //         aboutSection.style.opacity = 1;
        //         eventsSection.style.opacity = 1;
        //         contactSection.style.opacity = 1;
        //         aboutSection.style.zIndex = 2;
        //         aboutHeading[0].style.opacity = 1;
        //         aboutCarousel[0].style.opacity = 1;
        //         aboutContent[0].style.opacity = 1;
        //       }
        //     }
        //   };
        //   window.addEventListener("scroll", handleScroll, { passive: true });
        // }
        // if (window.innerWidth <= 920) {

        //   const handleScroll = () => {
        //     if (statue) {
        //       const position = window.scrollY;
        //       const statueHeight = 60 + position / 20;
        //       const contactRadius = 150 - position / 5;
        //       const blur = position / 50;

        //       cursorImg.style.transform = `rotate(${position / 5}deg)`;
        //       statueMobile.style.height = `${statueHeight}%`;

        //       if (fixedBG[0]) {
        //         if (position > 100) {
        //           fixedBG[0].style.filter = `blur(${blur}px)`;
        //           fixedBG[0].style.transform = "scale(1.1)";
        //           rightLion[0].style.filter = `blur(${blur}px)`;
        //           leftLion[0].style.filter = `blur(${blur}px)`;
        //           countDown[0].style.filter = `blur(${blur}px)`;
        //           rightSubTitle[0].style.filter = `blur(${blur}px)`;
        //           leftSubtitle[0].style.filter = `blur(${blur}px)`;
        //           heading[0].style.filter = `blur(${blur}px)`;
        //           socials[0].style.filter = `blur(${blur}px)`;
        //           statueMobile.style.filter = `blur(${blur}px)`;
        //           // statue.style.filter = `blur(${blur}px)`;
        //           registerBtnMobile.style.filter = `blur(${blur}px)`;
        //         } else {
        //           fixedBG[0].style.filter = "blur(0)";
        //           fixedBG[0].style.transform = "scale(1)";
        //           rightLion[0].style.filter = "blur(0)";
        //           leftLion[0].style.filter = "blur(0)";
        //           countDown[0].style.filter = "blur(0)";
        //           leftSubtitle[0].style.filter = "blur(0)";
        //           rightSubTitle[0].style.filter = "blur(0)";
        //           heading[0].style.filter = "blur(0)";
        //           statueMobile.style.filter = "blur(0)";
        //           statue.style.filter = "blur(0)";
        //           socials[0].style.filter = "blur(0)";
        //           registerBtnMobile.style.filter = `blur(${blur}px)`;
        //         }
        //       }

        //       if (position <= window.innerHeight) {
        //         statueContainer.style.position = "fixed";
        //       } else {
        //         statueContainer.style.position = "absolute";
        //       }
        //     }
        //   };
        //   window.addEventListener("scroll", handleScroll, { passive: true });
        // }
        // return () => {
        //   window.onpointermove = null;
        //   window.scrollTo(0, 0);
        // };
      };
    }
  }, [regPage, showBlackScreen, showBlackScreen2]);

  useEffect(() => {
    const handleMouseOver = () => {
      // console.log("hi");
      document.getElementById("cursor").style.transform = "scale(5.5)";
      // document.getElementById("cursorFollowerDrag").style.display = "block";
      document.getElementById("cursorFollower").style.visibility = "hidden";
      document.querySelector(".cursorContent").style.opacity = "1";
    };

    const handleMouseOut = () => {
      document.getElementById("cursor").style.transform = "scale(1)";
      document.getElementById("cursorFollower").style.visibility = "visible";
      document.querySelector(".cursorContent").style.opacity = "0";
    };

    const eventCarousel = document.getElementById("eventCarousel");
    const cursorFollowerDrag = document.getElementById("cursorFollowerDrag");

    if (eventCarousel) {
      eventCarousel.addEventListener("mouseover", handleMouseOver);
      eventCarousel.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (eventCarousel) {
        eventCarousel.removeEventListener("mouseover", handleMouseOver);
        eventCarousel.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [regPage]);

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
    }
  }, [videoLoaded]);

  const handleStatueImageDrag = (event) => {
    event.preventDefault();
  };
  const handleOrganizingCardsBtnClick = () => {
    setCossacCards(true);
    setCossacSwitchBtn(true);
    // setTimeout(() => {
    //   setCossacSwitchBtn(true);
    // }, 500);
  };

  const handleCossacCardsButtonClick = () => {
    setCossacCards(false);
    setCossacSwitchBtn(false);
    // setTimeout(() => {
    //   setCossacSwitchBtn(false);
    // }, 500);
  };

  useEffect(() => {
    if (!regPage) {
      document.body.style.height = "400vh";
    } else {
      document.body.style.height = "fit-content";
    }
  }, [regPage]);

  return (
    <>
      {isLoading && (
        <div className="loader" id="loader">
          <video autoPlay loop muted playsInline>
            <source src={LoaderVideo} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="cursor" id="cursor">
        <div className="cursorContent">
          <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.49512 12.0679L1.52424 6.6941L7.49512 1.32031" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.50488 12.0679L7.47576 6.6941L1.50488 1.32031" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className="cursorFollower" id="cursorFollower">
        <img id="cursorImg" src={Cursor} alt=""></img>
      </div>
      <div className="cursorFollowerDrag" id="cursorFollowerDrag">
        <img id="cursorImg" src={CursorDrag} alt=""></img>
      </div>

      <>
        {showBlackScreen && (
          <div className="blackScreen">
            <img alt="" src={logo} />
          </div>
        )}
        {showBlackScreen2 && (
          <div className="blackScreen2">
            <img alt="" src={logo} />
          </div>
        )}
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
            isLoading={isLoading}
            sectionId="landing-section"
            content={
              <main className={styles["landing"]}>
                {
                  <motion.div
                    className={styles["statueContainer"]}
                    id="statueContainer"
                    initial={{ y: [600] }}
                    animate={isLoading || isHamOpen ? "hidden" : "visible"}
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
                  </motion.div>
                }
                {
                  <motion.div
                    className={styles["leftLion"]}
                    initial={{ opacity: [0], x: [100] }}
                    animate={isLoading ? "" : isHamOpen ? "hidden" : "visible"}
                    variants={leftLionVariants}
                  >
                    <img src={LeftLion} alt="" />
                  </motion.div>
                }
                {
                  <motion.div
                    className={styles["rightLion"]}
                    initial={{ opacity: [0], x: [-100] }}
                    animate={isLoading ? "" : isHamOpen ? "hidden" : "visible"}
                    variants={rightLionVariants}
                  >
                    <img src={RightLion} alt="" />
                  </motion.div>
                }
                <div className={styles["container"]}>
                  <motion.div className={styles["heading"]}>
                    <>
                      {
                        <motion.span
                          initial={{ opacity: [0] }}
                          animate={
                            isLoading ? "" : isHamOpen ? "hidden" : "visible"
                          }
                          variants={leftHeadingVariants}
                        >
                          BO
                        </motion.span>
                      }
                      {
                        <motion.span
                          initial={{ opacity: [0] }}
                          animate={
                            isLoading ? "" : isHamOpen ? "hidden" : "visible"
                          }
                          variants={rightHeadingVariants}
                        >
                          SM
                        </motion.span>
                      }
                    </>
                  </motion.div>
                  {
                    <motion.div
                      className={styles["leftSubTitle"]}
                      initial={{ opacity: [0] }}
                      animate={
                        isLoading ? "" : isHamOpen ? "hidden" : "visible"
                      }
                      variants={leftTextVariants}
                    >
                      <h1>The</h1>
                      <h2>ROAR</h2>
                    </motion.div>
                  }

                  {
                    <motion.div
                      className={styles["rightSubTitle"]}
                      initial={{ opacity: [0] }}
                      animate={
                        isLoading ? "" : isHamOpen ? "hidden" : "visible"
                      }
                      variants={rightTextVariants}
                      onAnimationComplete={() => setIsLoaded(true)}
                    >
                      <h1>Of</h1>
                      <h2>RESILIENCE</h2>
                    </motion.div>
                  }

                  {/* Hero Wrapper */}
                  <motion.div className={styles["heroWrapper"]}></motion.div>

                  {/* Countdown */}
                  {
                    <motion.div
                      className={styles["countDown"]}
                      initial={{ opacity: [0] }}
                      animate={
                        isLoading ? "" : isHamOpen ? "hidden" : "visible"
                      }
                      variants={countdownVariants}
                    >
                      <Countdown />
                    </motion.div>
                  }

                  {
                    <motion.div
                      className={styles["socials"]}
                      initial={{ opacity: [0] }}
                      animate={
                        isLoading ? "" : isHamOpen ? "hidden" : "visible"
                      }
                      variants={countdownVariants}
                    >
                      <Socials />
                    </motion.div>
                  }
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
            style={
              typeof window !== "undefined"
                ? window.innerWidth > 920
                  ? { opacity: 0 }
                  : { opacity: 1 }
                : ""
            }
            sectionId="about-us-section"
            content={
              <>
                <AboutUs />
              </>
            }
          />
        )}
        {!regPage && (
          <Layout
            overflow={true}
            navbar={false}
            regPage={regPage}
            fixedbg={false}
            sectionId="events-section"
            style={
              typeof window !== "undefined"
                ? window.innerWidth > 920
                  ? { opacity: 0 }
                  : { opacity: 1 }
                : ""
            }
            content={
              <>
                <Events />
              </>
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
            style={
              typeof window !== "undefined"
                ? window.innerWidth > 920
                  ? { opacity: 0 }
                  : { opacity: 1 }
                : ""
            }
            content={
              <main
                id="contactPage"
                className={contact["page"]}
              // style={{ top: "30vh" }}
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
                  <div id="contactContent" className={contact["content"]}>
                    <div className={contact["contentContainer"]}>
                      <div className={contact["title"]}>CONTACT US</div>
                      <motion.div
                        className={contact["cardsContainer"]}
                        key={cossacSwitchBtn}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, delay: 1 }}
                        exit={{ opacity: 0, delay: 1 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                      >
                        {cossacCards ? ContactsCards1 : ContactsCards2}
                      </motion.div>
                    </div>
                  </div>
                  <div className={contact["cardsSwitchButtons"]}>
                    <div
                      className={contact["organizingBtn"]}
                      onClick={handleOrganizingCardsBtnClick}
                      style={
                        !cossacSwitchBtn
                          ? { borderBottom: "3px solid rgba(255, 255, 255, 0)" }
                          : {
                            borderBottom: "3px solid white",
                          }
                      }
                    >
                      Organizing Committee
                    </div>
                    <div
                      className={contact["cossacBtn"]}
                      onClick={handleCossacCardsButtonClick}
                      style={
                        cossacSwitchBtn
                          ? { borderBottom: "3px solid rgba(255, 255, 255, 0)" }
                          : {
                            borderBottom: "3px solid white",
                          }
                      }
                    >
                      CoSSAC
                    </div>
                  </div>
                </div>
              </main>
            }
          />
        )}
        {regPage && (
          <div>
            <Layout
              overflow={true}
              navbar={false}
              regPage={regPage}
              fixedbg={false}
              content={
                <Form
                  setShowBlackScreen2={setShowBlackScreen2}
                  setRegPage={setRegPage}
                />
              }
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
