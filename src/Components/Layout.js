import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/globals.css";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Hamburger from "./Hamburger";
import MobileHamburger from "./MobileHamburger";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Layout = ({
  content,
  fixedbg,
  navbar,
  setRegPage,
  setShowBlackScreen,
  isHamOpen,
  setIsHamOpen,
  overflow,
  sectionId,
  regPage,
  closeHam
}) => {

  // const { scrollYProgress } = useScroll();
  // const bgWidth = useTransform(scrollYProgress, [0.0, 0.25], ['100%', '0%']);

  useEffect(() => {
    gsap.to(".fixed-bg-blue", {
      scrollTrigger: {
        trigger: ".fixed-bg-blue",
        start: "10%",
        scrub: 0.5,
        snap: 1
      },
      width: "0%",
      ease: 'none',
      duration: 1
    })
  }, [])

  const redBgVariants = {
    open: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      x: "-25vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const blueBgVariants = {
    open: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      x: "25vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const blackScreenVariants = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const hamClose = {
    open: {
      opacity: 1,
      transiton: {
        delay: 0,
        duration: 1,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      }
    }
  }

  const isBrowser = typeof window !== "undefined";
  const [isAnimationComplete, setIsAnimationComplete] = React.useState(false);

  return (
    <section
      data-scroll-section
      id={sectionId}
      className="layout-section"
      style={{ overflow: overflow ? "visible" : "hidden" }}
    >
      {fixedbg && (
        <div className="fixed-bg">
          <motion.div
            className="fixed-bg-red"
            animate={isHamOpen ? "closed" : "open"}
            variants={isBrowser && window.innerWidth > 731 && redBgVariants}
            
          ></motion.div>
          <motion.div
            className="fixed-bg-blue"
            animate={isHamOpen ? "closed" : "open"}
            variants={isBrowser && window.innerWidth > 731 && blueBgVariants}
            style={{width: "100%"}}
            // style={typeof window !== "undefined" ? window.innerWidth > 920 ? { width: bgWidth } : "" : ""}
          // animate={{
          //   y: [500, 500, -250, 0, 0, 0, 0],
          //   x: [0, 0, 0, 0, 0, 300, 0],
          //   scaleY: [2, 2, 2, 2, 2, 1],
          //   scaleX: [3, 3, 3, 3, 2, 1],
          //   rotate: [90, 90, 90, 90, 105, -10, 0],
          //   transformOrigin: [
          //     "center left",
          //     "center left",
          //     "center left",
          //     "center left",
          //     "center left",
          //   ],
          //   borderRadius: ["0%", "0%", "0%", "0%", "0%"],
          // }}
          // transition={{
          //   duration: 3,
          //   ease: "easeInOut",
          //   times: [0, 0.1, 0.3, 0.45, 0.6, 0.8, 1],
          //   repeat: 0,
          //   repeatDelay: 1,
          // }}
          />{" "}
        </div>
      )}
      {navbar && (
        <Navbar
          setRegPage={setRegPage}
          setShowBlackScreen={setShowBlackScreen}
          isHamOpen={isHamOpen}
          isAnimationComplete={isAnimationComplete}
          setIsHamOpen={setIsHamOpen}
        />
      )}
      <Hamburger
        regPage={regPage}
        closeHam={() => setIsHamOpen(false)}
        isHamOpen={isHamOpen}
        isAnimationComplete={isAnimationComplete}
      />

      <AnimatePresence>
        {isHamOpen && isBrowser && window.innerWidth > 711 && (
          <>
            <motion.div
              onMouseDown={() => {
                if (isAnimationComplete) setIsHamOpen(false);
              }}
              initial={{ opacity: 0 }}
              animate={isHamOpen ? "open" : "closed"}
              exit={{ opacity: 0 }}
              variants={blackScreenVariants}
            >
            </motion.div>
            <motion.div
              // onMouseDown={() => {
              //   if (isAnimationComplete) setIsHamOpen(false);
              // }}
              className="ham-black-screen-right"
              initial={{ opacity: 0 }}
              animate={isHamOpen ? "open" : "closed"}
              variants={blackScreenVariants}
              exit={{ opacity: 0 }}
              onAnimationComplete={() =>
                setIsAnimationComplete((prev) => !prev)
              }
            // onAnimationEnd={()=>console.log("end")}
            />
            <motion.div
              // onMouseDown={() => {
              //   if (isAnimationComplete) setIsHamOpen(false);
              // }}
              className="ham-black-screen-left"
              initial={{ opacity: 0 }}
              animate={isHamOpen ? "open" : "closed"}
              variants={blackScreenVariants}
              exit={{ opacity: 0 }}
            />

          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHamOpen && window.innerWidth < 711 && (
          <motion.div
            className="mobileHamburger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          >
            <MobileHamburger
              closeHam={() => setIsHamOpen(false)}
              isHamOpen={isHamOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <React.Fragment>{content}</React.Fragment>
    </section>
  );
};

export default Layout;
