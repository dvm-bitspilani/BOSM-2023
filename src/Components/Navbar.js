import React, { useEffect } from "react";
import * as styles from "../Styles/Navbar.module.css";
import Logo from "../images/logo.svg";
// import hamIcon from "../images/Ham Icon.svg";
import { motion, transform } from "framer-motion";
import { navigate } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const Navbar = ({
  isLoading,
  setRegPage,
  setShowBlackScreen,
  isHamOpen,
  setIsHamOpen,
  isAnimationComplete,
}) => {
  const goToNextPage = () => {
    setShowBlackScreen(true);
    // setTimeout(() => {
    //   setShowBlackScreen(false);
    // }, 4000);

      const assets = document.querySelectorAll(
        "img", "font", "style" , "div" , "section"
      );
  
      let assetsLoaded = 0;
  
      const handleAssetLoad = () => {
        assetsLoaded++;
        if (assetsLoaded === assets.length) {
          setTimeout(() => {
            document.getElementsByClassName("blackScreen")[0].style.transform = 'translateY(-100%)';
          }, 2000);
          setTimeout(() => {
            setShowBlackScreen(false);
          }, 3000);
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

    setTimeout(() => {
      setRegPage(true);
    }, 1000);
  };

  const isBrowser = typeof window !== "undefined";

  const navbarUpVariants = {
    open: {
      y: 0,
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      y: -150,
      transition: {
        delay: isBrowser && window.innerWidth > 711 ?  1 : 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const navbarDownVariants = {
    open: {
      y: 0,
      x: "-50%",
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      y: 150,
      opacity: 1,
      transition: {
        delay: isBrowser && window.innerWidth > 711 ?  1 : 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const hamburgerIconVariants ={
    open:{

    },
    close:{

    }
  };

  const openHam =()=>{
    // console.log(isHamOpen, isAnimationComplete)
    if (isHamOpen && (isAnimationComplete || isBrowser && window.innerWidth < 711)) {
      setIsHamOpen(false);
    }else{
       setIsHamOpen(true);
    }
   
  };
  useEffect(() => {
    const topBar1 = document.querySelector('#hamIcon1');
    const topBar2 = document.querySelector('#hamIcon2');
    const topBar3 = document.querySelector('#hamIcon3');
    if (isHamOpen) {
      topBar1.style.transform = 'rotatez(45deg) translate(6px,0px)';
      topBar2.style.transform = 'rotatez(-45deg) translate(1px,0px)';
      topBar3.style.transform = 'translate(16px,-8.5px) rotatez(47deg)';
      topBar3.style.width = '50%';
      topBar3.style.borderRadius = '0px 5px 5px 0px';
    }
    else {
      topBar1.style.transform = 'rotate(0deg) translate(0px,0px)';
      topBar2.style.transform = 'rotatez(0deg) translate(0px,0px)';
      topBar3.style.transform = 'translate(0px,0px) rotatez(0deg)';
      topBar3.style.width = '75%';
      topBar3.style.borderRadius = '5px'
    }
  },[isHamOpen])

  return (
    <React.Fragment>
      {!isLoading && <motion.div className={styles["navbarContainer"]}>
        {!isLoading && <motion.div
          className={styles["navLogo"]}
          initial={{ y: [-150] }}
          animate={isHamOpen ? "closed" : "open"}
          variants={navbarUpVariants}
        >
          <img id="bosm-logo" src={Logo} alt="logo" draggable={false}/>
        </motion.div>}
        <nav className={styles["navbarLeft"]}>
          <ul>
            <li className={styles["navLinks"]}>ABOUT US</li>
            <li className={styles["navLinks"]}>EVENTS</li>
          </ul>
        </nav>
        <nav className={styles["navbarRight"]}>
          <ul>
            <li className={styles["navLinks"]}>CONTACT US</li>
            <li className={styles["navLinks"]}>SPONSORS</li>
          </ul>
        </nav>

        <div className={styles["navbarRightCorner"]}>
          {!isLoading && <motion.div
            className={styles["registerBtn"]}
            id="register-btn"
            onClick={goToNextPage}
            initial={{ y: [-150] }}
            animate={isHamOpen ? "closed" : "open"}
            variants={navbarUpVariants}
          >
            <p>REGISTER</p>
          </motion.div>}
          {!isLoading && <div>
            {/* <img src={hamIcon} alt="hamIcon" />open
             */}
             <div id="ham-menu" className={styles.hamIcon} onClick={openHam}>
                <span id="hamIcon1" className={styles.hamIcon1}></span>
                <span id="hamIcon2" className={styles.hamIcon2}></span>
                <span id="hamIcon3" className={styles.hamIcon3}></span>
             </div>
          </div>}
        </div>
      </motion.div>}
      {!isLoading && <motion.div
        id="regBtnMobile"
        className={styles["registerBtnMobile"]}
        onClick={goToNextPage}
        initial={{ y: 150, x: "-50%", opacity: 0}}
        animate={isHamOpen ? "closed" : "open"}
        variants={navbarDownVariants}
      >
        <p>REGISTER</p>
      </motion.div>}
    </React.Fragment>
  );
};

export default Navbar;
