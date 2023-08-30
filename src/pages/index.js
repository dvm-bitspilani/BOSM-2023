import * as React from "react";
import { useState, useEffect, useLayoutEffect } from "react";

import Layout from "../Components/Layout";
import Countdown from "../Components/Countdown";
import N2O from "../Components/N2O";
import ProfShow from "../Components/ProfShow";

import * as styles from "../Styles/Content.module.css";
import * as contact from "../Styles/Contact.module.css";
import * as about from "../Styles/About.module.css";
import * as navbar from "../Styles/Navbar.module.css";
import * as profshow from "../Styles/ProfShow.module.css";
import * as n2o from "../Styles/N2O.module.css";

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
import Girl from "../Components/ContactsData/ContactImages/contact_girl.png";
import Boy from "../images/boy.png";
// import Boy from "../Components/ContactsData/ContactImages/contact_boy.png";

import { SEO } from "../Components/SEO";
import LoaderVideo from "../images/loader.mp4";
import Socials from "../Components/Socials";
import AboutUs from "../Components/AboutUs";
import Events from "../Components/Events";
import Vidhartha from "../Components/ContactsData/ContactImages/Vidhartha.png";
import AnushkaPatil from "../Components/ContactsData/ContactImages/AnushkaPatil.png";
import AnushkaShukla from "../Components/ContactsData/ContactImages/AnushkaShukla.png";
import Pradyut from "../Components/ContactsData/ContactImages/Pradyut.png";
import Shreyas from "../Components/ContactsData/ContactImages/Shreyas.png";
import Syed from "../Components/ContactsData/ContactImages/Syed.png";
import Ayush from "../Components/ContactsData/ContactImages/Ayush.png";
import Shirish from "../Components/ContactsData/ContactImages/shirish.jpg";
import shivang from "../Components/ContactsData/ContactImages/shivang.jpg";
import yashwasin from "../Components/ContactsData/ContactImages/yashwasin.jpg";
import sriram from "../Components/ContactsData/ContactImages/sriram.jpg";
import Vinayak from "../Components/ContactsData/ContactImages/Vinayak.jpg";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, Observer);

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cossacSwitchBtn, setCossacSwitchBtn] = useState(true);
  const [cossacCards, setCossacCards] = useState(true);

  // console.log({ cossacSwitchBtn });
  // useEffect(() => {
  //   if (isLoading) {
  //     document.documentElement.style.overflow = "hidden";
  //   } else document.documentElement.style.overflow = "scroll";
  // }, [isLoading]);

  const ContactsData1 = [
    {
      name: "Shreyas Sesham",
      image: `${Shreyas}`,
      department: "Publications and Correspondence",
      phone: "+91-7411283012",
      email: "pcr@bitsbosm.org",
    },
    {
      name: "Aditya Kumar Sriram",
      image: `${sriram}`,
      department: "Sports Secretary",
      phone: "",
      email: "sportssecretary@bitsbosm.org",
    },
    {
      name: "Shivang Rai",
      image: `${shivang}`,
      department: "Websites and Payments",
      phone: "+91-9718863691",
      email: "raishivang03@gmail.com",
    },
  ];

  const ContactsData2 = [
    {
      name: "Shreyas Sesham",
      image: `${Shreyas}`,
      department: "Publications and Correspondence",
      phone: "+91-7411283012",
      email: "pcr@bitsbosm.org",
    },
    {
      name: "Shirish Kumaravel",
      image: `${Shirish}`,
      department: "Reception and Accommodation",
      phone: "+91-8277207380",
      email: "recnacc@bitsbosm.org",
    },
    {
      name: "Ayush Singh Bhandari",
      image: `${Ayush}`,
      department: "Sponsorship and Marketing",
      phone: "+91-7406755757",
      email: "sponsorship@bitsbosm.org",
    },
    {
      name: `Anushka Patil`,
      image: `${AnushkaPatil}`,
      department: "Controls",
      phone: "+91-9175916459",
      email: "controls@bitsbosm.org",
    },
    {
      name: "Aditya Kumar Sriram",
      image: `${sriram}`,
      department: "Sports Secretary",
      phone: "",
      email: "sportssecretary.bitsbosm.org",
    },
    {
      name: "Syed Aga Hani Riza",
      image: `${Syed}`,
      department: "Joint Sports Secretary",
      phone: "+91-9086470287",
      email: "sports-union@pilani.bits-pilani.ac.in",
    },
    {
      name: "Anushka Shukla",
      image: `${AnushkaShukla}`,
      department: "Joint Sports Secretary",
      phone: "+91-9810091168",
      email: "sports-union@pilani.bits-pilani.ac.in",
    },
    {
      name: "Yashwasin Jain",
      image: `${yashwasin}`,
      department: "Joint Sports Secretary",
      phone: "+91-8850781560",
      email: "sports-union@pilani.bits-pilani.ac.in",
    },
    {
      name: "Pradyut Sood",
      image: `${Pradyut}`,
      department: "Sports Financial Committee",
      phone: "",
      email: "sfc@pilani.bits-pilani.ac.in",
    },
    {
      name: "Vinayak Bhattacharya",
      image: `${Vinayak}`,
      department: "Sports Financial Committee",
      phone: "",
      email: "sfc@pilani.bits-pilani.ac.in",
    },
    {
      name: "Vidhatra Shukla",
      image: `${Vidhartha}`,
      department: "Sports Financial Committee",
      phone: "",
      email: "sfc@pilani.bits-pilani.ac.in",
    },
    {
      name: "Shivang Rai",
      image: `${shivang}`,
      department: "Websites and Payments",
      phone: "+91-9718863691",
      email: "raishivang03@gmail.com",
    },
  ];

  const Card1Row1 = ContactsData1.map((contact, index) => {
    if (index >= 0 && index < 2) {
      return (
        <ContactProfile
          cossacSwitchBtn={cossacSwitchBtn}
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
          cossacSwitchBtn={cossacSwitchBtn}
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
    if (index >= 0 && index < 4) {
      return (
        <ContactProfile
          cossacSwitchBtn={cossacSwitchBtn}
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
  }).slice(0, 4);

  const Card2Row2 = ContactsData2.map((contact, index) => {
    if (index >= 4 && index < 8) {
      return (
        <ContactProfile
          key={index}
          cossacSwitchBtn={cossacSwitchBtn}
          name={contact.name}
          img={contact.image}
          dept={contact.department}
          phone={contact.phone}
          email={contact.email}
        />
      );
    }
    return null;
  }).slice(4, 8);

  const Card2Row3 = ContactsData2.map((contact, index) => {
    if (index >= 8 && index < 12) {
      return (
        <ContactProfile
          cossacSwitchBtn={cossacSwitchBtn}
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
  }).slice(8, 12);

  const ContactsCards1 = (
    <div
      className={contact["cardsContainer1"]}
      style={{
        display: cossacCards ? "flex" : "none",
        opacity: 0,
      }}
    >
      <div className={contact["row"]}>{Card1Row1}</div>
      <div className={contact["row"]}>{Card1Row2}</div>
    </div>
  );

  const ContactsCards2 = (
    <div
      className={contact["cardsContainer2"]}
      style={{
        display: cossacCards ? "none" : "block",
        opacity: 0,
      }}
    >
      <div className={contact["row"]}>{Card2Row1}</div>
      <div className={contact["row"]}>{Card2Row2}</div>
      <div className={contact["row"]}>{Card2Row3}</div>
    </div>
  );

  const [regPage, setRegPage] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [showBlackScreen2, setShowBlackScreen2] = useState(false);

  const [isHamOpen, setIsHamOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    document.documentElement.style.overflow = isLoaded ? "scroll" : "hidden";
  }, [isLoaded]);

  const [activeSection, setActiveSection] = useState(0);

  useLayoutEffect(() => {
    if (!isLoading) {
      // const landingSection = document.getElementById("landing-section");
      // const aboutSection = document.getElementById("about-us-section");
      // landingSection.addEventListener("wheel", (event) => {
      //   // let deltaY = event.deltaY;
      //   // let scrollY = window.scrollY;
      //   // gsap.to(window, { scrollTo: `${scrollY + deltaY * 0.3}` , duration : 0.2});
      //   gsap.to(window, {
      //     scrollTo: event.deltaY > 0 ? tl1.scrollTrigger.labelToScroll("end") : tl1.scrollTrigger.labelToScroll("start"),
      //     duration: 1,
      //     ease: "none",
      //   });
      // });
      // aboutSection.addEventListener("wheel", (event) => {
      //   // let deltaY = event.deltaY;
      //   // let scrollY = window.scrollY;
      //   // gsap.to(window, { scrollTo: `${scrollY + deltaY * 0.3}` , duration : 0.2});
      //   // console.log(event)
      //   gsap.to(window, {
      //     scrollTo: event.deltaY > 0 ? tl2.scrollTrigger.labelToScroll("end") : tl2.scrollTrigger.labelToScroll("start"),
      //     duration: 1,
      //     ease: "none",
      //   });
      // });

      // ScrollTrigger.defaults({
      //   onUpdate: ({ progress, direction, isActive }) => {
      //     document.documentElement.style.overflow =
      //       progress < 0.3 || progress > 0.7 ? "scroll" : "hidden";
      //   },
      // });

      let tl1 = gsap.timeline({
        scrollTrigger: {
          id: "scroller1",
          trigger: ".fixed-bg",
          start: "top top",
          // endTrigger: ".fixed-bg-blue",
          end: `+=${window.innerHeight * 3}`,
          toggleActions: "play none none reverse",
          onEnter: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "hidden";
            // scrollTo: tl.scrollTrigger.labelToScroll("myLabel")
            // document.body.style.height = "200vh";

            // !isActive &&
            // gsap.to(window, {
            //   scrollTo: `${window.innerHeight}`,
            //   duration: 2,
            // });

            // gsap.to(window, {
            //   scrollTo: tl1.scrollTrigger.labelToScroll("end"),
            //   duration: 2,
            // });
            if (regPage === false) {
              const aboutUsSection =
                document.getElementById("about-us-section");
              if (aboutUsSection) {
                aboutUsSection.style.zIndex = 2;
              }
            }
          },
          onLeave: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "scroll";
            // gsap.to(window, {
            //   scrollTo: `${window.innerHeight}`,
            // });
          },
          onLeaveBack: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "scroll";
            // gsap.to(window, { scrollTo: `0`});
            if (regPage === false) {
              const aboutUsSection =
                document.getElementById("about-us-section");
              if (aboutUsSection) {
                aboutUsSection.style.zIndex = 0;
                // aboutUsSection.style.position = "fixed";
                aboutUsSection.style.top = "0";
              }
            }
          },
          onEnterBack: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "hidden";
            // !isActive &&
            // gsap.to(window, {
            //   scrollTo: `0`,
            //   duration: 2,
            // });
          },
          // markers: {
          //   startColor: "white",
          //   endColor: "white",
          //   fontSize: "12px",
          //   indent: 20,
          // },
          // onToggle: () => {
          //   document.documentElement.style.overflow =
          //     document.documentElement.style.overflow === "scroll"
          //       ? "hidden"
          //       : "scroll";
          // },
          scrub: 0.3,
          snap: {
            snapTo: 1,
            duration: 1,
            ease: "power1.out",
          },
        },
      });

      tl1
        .addLabel("start")
        // .call(() => {
        //   if (regPage === false) {
        //     const aboutUsSection = document.getElementById("about-us-section");
        //     if (aboutUsSection && !tl1.reversed()) {
        //       aboutUsSection.style.zIndex = 2;
        //     } else if (aboutUsSection && tl1.reversed()) {
        //       aboutUsSection.style.zIndex = 0;
        //     }
        //   }
        //   // setActiveSection(0);
        // })
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
        .to(".fixed-bg-blue", {
          width: "0%",
          ease: "none",
        })
        .to("#about-us-section", {
          opacity: 1,
          ease: "none",
          // position: "absolute",
          // top: "100vh",
        })
        .call(() => {
          // setActiveSection(1);
        })
        .addLabel("end");

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-us-section",
          start: `${window.innerHeight * 3} top`,
          // endTrigger: ".fixed-bg-blue",
          end: `+=${window.innerHeight * 3}`,
          toggleActions: "play none none reverse",
          // markers: {
          //   startColor: "white",
          //   endColor: "white",
          // },
          onEnter: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "hidden";

            // !isActive &&
            // gsap.to(window, {
            //   scrollTo: `${window.innerHeight * 2}`,
            //   duration: 2.5,
            // });
          },
          onLeaveBack: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "scroll";
          },
          onLeave: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "scroll";
          },
          onEnterBack: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "hidden";
            // !isActive &&
            // gsap.to(window, { scrollTo: `${window.innerHeight}`, duration: 2 });
          },
          scrub: 0.3,
          // yoyo: true,
          snap: {
            snapTo: 1,
            duration: { min: 0.2, max: 2 },
            ease: "slow(0.7, 0.7, true)",
            delay: 0,
          },
        },
      });

      tl2
        .addLabel("start")
        // .call(() => setActiveSection(1))
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
          x: "220%",
          y: "60%",
          ease: "slow(0.9, 0.7, false)",
          // duration : 2,
        })
        .from(
          "#eventCarousel",
          {
            rotation: 70,
            ease: "slow(0.9, 0.7, false)",
            // duration : 2,
          },
          "<"
        )
        // .call(() => setActiveSection(2))
        .addLabel("end");
      // .from("#events-heading", {
      //   opacity:0,
      //   ease : "none",

      // })

      let tl3 = gsap.timeline({
        scrollTrigger: {
          start: `${window.innerHeight * 6} top`,
          end: `+=${window.innerHeight * 3}`,
          toggleActions: "play none none reverse",
          onEnter: ({ progress, direction, isActive }) => {
            if (regPage === false) {
              const profsection = document.getElementById("prof-section");
              if (profsection) {
                profsection.style.zIndex = 4;
              }
            }
          },
          onLeaveBack: ({ progress, direction, isActive }) => {
            if (regPage === false) {
              const profsection = document.getElementById("prof-section");
              if (profsection) {
                profsection.style.zIndex = 0;
              }
            }
          },
          onLeave: ({ progress, direction, isActive }) => {
            // document.documentElement.style.overflow = "scroll";
          },
          onEnterBack: ({ progress, direction, isActive }) => {},
          scrub: 0.3,
          snap: {
            snapTo: 1,
            duration: 2,
            ease: "none",
          },
        },
      });

      tl3
        .addLabel("start")
        .from(`#profshowBall`, {
          left: "-60vw",
          top: "100vh",
          scale: 0,
          ease: "none",
        })
        .to("#profshowBall", {
          width: "150%",
          ease: "none",
        })
        .from(`.${profshow["profShowPage"]}`, {
          opacity: 0,
          ease: "none",
        });

      // tl5 = gsap.timeline({
      //   scrollTrigger: {
      //     start: `${window.innerHeight * 12} top`,
      //     end: `+=${window.innerHeight * 3}`,
      //     toggleActions: "play none none reverse",
      //     scrub: 0.3,
      //     snap: {
      //       snapTo: 1,
      //       duration: 1,
      //       ease: "power1.out",
      //     },
      //   },
      // });

      // tl5
      //   .addLabel("start")
      //   // .call(() => setActiveSection(2))
      //   .to(`#events-section`, {
      //     y: "-100%",
      //     opacity: 0,
      //     ease: "none",
      //     // duration: 1,
      //   })
      //   .to("#contact-section", {
      //     y: "-100%",
      //     ease: "none",
      //     // duration: 1,
      //   })
      //   .from(`.${contact["pageBackground"]}`, {
      //     x: "-100%",
      //     ease: "none",
      //     // duration: 1,
      //   })
      //   .from(
      //     "#contactContent",
      //     {
      //       x: "100%",
      //       ease: "none",
      //       // duration: 1,
      //     },
      //     "<"
      //   )
      //   .from(
      //     `.${contact["cardsSwitchButtons"]}`,
      //     {
      //       x: "100%",
      //       ease: "none",
      //       // duration: 1,
      //     },
      //     "<"
      //   )
      //   // .call(() => setActiveSection(3))
      //   .addLabel("end");

      // const tlSections = [tl1, tl2, tl3];
      // tl1.pause();
      // tl2.pause();
      // tl3.pause();

      ScrollTrigger.observe({
        target: window, // can be any element (selector text is fine)
        type: "wheel,touch",
        scrollSpeed: 0.2,
        wheelSpeed: 0.2,
        onUp: (self) => {
          // if (activeSection === 0) {
          //   return;
          // } else if (activeSection === 1) {
          //   if (!tl1.isActive() && !tl2.isActive()) {
          //       tl1.progress(1)
          //       tl1.reverse()
          //   }
          // } else if (activeSection === 2) {
          //   if (!tl2.isActive() && !tl3.isActive()) {
          //     tl2.progress(1)
          //       tl2.reverse()
          //   }
          // } else if (activeSection === 3) {
          //   if (!tl3.isActive()) {
          //     tl3.progress(1)
          //     tl3.reverse();
          //   }
          // }
          // setActiveSection((prev) => --prev);
        },
        onDown: (self) => {
          // console.log(tl1.isActive(), tl2.isActive(), tl3.isActive());
          // console.log(self);
          // console.log(activeSection);
          //     if (activeSection === 0) {
          //       if (!tl1.isActive()) {
          //         tl1.play();
          //         // setActiveSection(1);
          //       }
          //     } else if (activeSection === 1) {
          //       if (!tl1.isActive() && !tl2.isActive()) {
          //         // console.log("play")
          //         tl2.play();
          //         // setActiveSection(2);
          //       }
          //     } else if (activeSection === 2) {
          //       if (!tl2.isActive() && !tl3.isActive()) {
          //         tl3.play();
          //         // setActiveSection(3);
          //       }
          //     } else if (activeSection === 3) {
          //       return;
          //     }
          //   },
        },
      });
    }

    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, [regPage, isLoading]);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorCircle = document.getElementById("cursorFollower");
    const cursorCircleDrag = document.getElementById("cursorFollowerDrag");
    const cursorImg = document.getElementById("cursorImg");
    const frontStatue = document.getElementById("frontStatue");
    const backStatue = document.getElementById("backStatue");

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

        return () => {
          window.onpointermove = null;
          window.scrollTo(0, 0);
        };
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.scrollTo(0, 0);
    }
  }, [regPage, showBlackScreen, showBlackScreen2]);

  useEffect(() => {
    const handleMouseOver = () => {
      // console.log("hi");
      document.getElementById("cursorFollower").style.visibility = "hidden";
      document.getElementById("cursor").style.transform = "scale(5.5)";
      document.querySelector(".cursorContent").style.opacity = "1";
    };

    const handleMouseOut = () => {
      document.getElementById("cursor").style.transform = "scale(1)";
      document.getElementById("cursorFollower").style.visibility = "visible";
      document.querySelector(".cursorContent").style.opacity = "0";
    };

    const eventCarousel = document.getElementById("eventCarousel");
    console.log(eventCarousel);

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
  }, [regPage, showBlackScreen, showBlackScreen2, isLoaded]);

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
      const assets = document.querySelectorAll(
        "img",
        "font",
        "style",
        "iframe"
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
    }
  }, [videoLoaded]);

  const handleStatueImageDrag = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (cossacCards) {
      gsap.to(`.${contact["cardsContainer1"]}`, {
        opacity: 1,
        duration: 1,
      });
      gsap.to(`.${contact["pageBackground"]}`, {
        opacity: 1,
        duration: 1,
      });
      gsap.to(`.${contact["cardsContainer2"]}`, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(`.${contact["cardsContainer2"]}`, {
        opacity: 1,
        duration: 1,
      });
      gsap.to(`.${contact["pageBackground"]}`, {
        opacity: 0,
        duration: 1,
      });
      gsap.to(`.${contact["cardsContainer1"]}`, {
        opacity: 0,
        duration: 1,
      });
    }
  }, [cossacCards, isLoading]);

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
      document.body.style.height = "1600vh";
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
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49512 12.0679L1.52424 6.6941L7.49512 1.32031"
              stroke="black"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.50488 12.0679L7.47576 6.6941L1.50488 1.32031"
              stroke="black"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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

        {/* Landing Section */}
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

        {/* About Us Section */}
        {!regPage && !isLoading && (
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

        {/* Events Section */}
        {!regPage && !isLoading && (
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

        {/* N2O Section */}
        {!regPage && !isLoading && (
          <Layout
            overflow={true}
            navbar={false}
            regPage={regPage}
            fixedbg={false}
            sectionId="prof-section"
            style={
              typeof window !== "undefined"
                ? window.innerWidth > 920
                  ? { opacity: 0 }
                  : { opacity: 1 }
                : ""
            }
            content={
              <>
                <ProfShow />
              </>
            }
          />
        )}

        {/* Prof  selection */}
        {!regPage && !isLoading && (
          <Layout
            overflow={true}
            navbar={false}
            regPage={regPage}
            fixedbg={false}
            sectionId="N2O-section"
            style={
              typeof window !== "undefined"
                ? window.innerWidth > 920
                  ? { opacity: 0 }
                  : { opacity: 1 }
                : ""
            }
            content={
              <>
                <div id="profshowBall" />
                <ProfShow />
              </>
            }
          />
        )}


        {/* Contact Section */}
        {!regPage && !isLoading && (
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
                  <div
                    className={contact["pageBackground"]}
                    style={{ display: cossacSwitchBtn ? "block" : "none" }}
                  >
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
                      {typeof window !== "undefined" &&
                        window.innerWidth < 920 && (
                          <div className={contact["cardsSwitchButtons2"]}>
                            <div
                              className={contact["organizingBtn"]}
                              onClick={handleOrganizingCardsBtnClick}
                              style={
                                !cossacSwitchBtn
                                  ? {
                                    borderBottom:
                                      "3px solid rgba(255, 255, 255, 0)",
                                  }
                                  : {
                                    borderBottom: "3px solid white",
                                  }
                              }
                            >
                              Contact
                            </div>
                            <div
                              className={contact["cossacBtn"]}
                              onClick={handleCossacCardsButtonClick}
                              style={
                                cossacSwitchBtn
                                  ? {
                                    borderBottom:
                                      "3px solid rgba(255, 255, 255, 0)",
                                  }
                                  : {
                                    borderBottom: "3px solid white",
                                  }
                              }
                            >
                              Organizing Committee
                            </div>
                          </div>
                        )}
                      <div
                        className={contact["cardsContainer"]}
                        style={{
                          width: cossacSwitchBtn
                            ? typeof window !== undefined &&
                              window.innerWidth > 900
                              ? "45vw"
                              : "90vw"
                            : "90vw",
                        }}
                        key={cossacSwitchBtn}
                      >
                        {/* {cossacCards ? ContactsCards1 : ContactsCards2} */}
                        {ContactsCards1}
                        {ContactsCards2}
                      </div>
                    </div>
                  </div>
                  {typeof window !== "undefined" && window.innerWidth > 920 && (
                    <div className={contact["cardsSwitchButtons"]}>
                      <div
                        className={contact["organizingBtn"]}
                        onClick={handleOrganizingCardsBtnClick}
                        style={
                          !cossacSwitchBtn
                            ? {
                              borderBottom:
                                "3px solid rgba(255, 255, 255, 0)",
                            }
                            : {
                              borderBottom: "3px solid white",
                            }
                        }
                      >
                        Contact
                      </div>
                      <div
                        className={contact["cossacBtn"]}
                        onClick={handleCossacCardsButtonClick}
                        style={
                          cossacSwitchBtn
                            ? {
                              borderBottom:
                                "3px solid rgba(255, 255, 255, 0)",
                            }
                            : {
                              borderBottom: "3px solid white",
                            }
                        }
                      >
                        Organizing Committee
                      </div>
                    </div>
                  )}
                </div>
              </main>
            }
          />
        )}

        {/* Registration Page */}
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
    <SEO />
  </>
);
