import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import RightArrowImage from "../images/aboutUsCarouselRightArrow.png";
import LeftArrowImage from "../images/aboutUsCarouselLeftArrow.png";
import "../Styles/AboutUsCarousel.css";

const AboutUsCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: 10 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // const carouselVariants = {
  //       offscreen: {
  //           opacity: 0
  //       },
  //       onscreen: {
  //           opacity: 1,
  //           transition: {
  //               duration: 1
  //           }
  //       }
  //   }

  const contentVariants = {
    offscreen: {
        opacity: 0,
        x: 200
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }
}

  return (
    <div className="about-us-carousel">
      <div className="about-us-carousel-top">
        <motion.div
          className="about-us-carousel-prev"
          onClick={handlePrevious}
        // variants={slidersVariants}
        // whileHover="hover"
        >
          <img src={LeftArrowImage} alt="" />
        </motion.div>
        <motion.div
          className="about-us-carousel-img-wrapper"
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          {/* <AnimatePresence> */}
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
          // initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          // animate="visible"
          // exit="exit"
          // variants={slideVariants}
          />
          {/* </AnimatePresence> */}
        </motion.div>
        <motion.div
          className="about-us-carousel-next"
          onClick={handleNext}
        // variants={slidersVariants}
        // whileHover="hover"
        >
          <img src={RightArrowImage} alt="" />
        </motion.div>
      </div>
      <div className="about-us-indicator">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`about-us-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          // initial="initial"
          // animate={currentIndex === index ? "animate" : ""}
          // whileHover="hover"
          // variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsCarousel;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(null);

//   const slideVariants = {
//     hiddenRight: {
//       x: "100%",
//       opacity: 0,
//     },
//     hiddenLeft: {
//       x: "-100%",
//       opacity: 0,
//     },
//     visible: {
//       x: "0",
//       opacity: 1,
//       transition: {
//         duration: 1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   const slidersVariants = {
//     hover: {
//       scale: 1.2,
//       backgroundColor: "#ff00008e",
//     },
//   };
//   const dotsVariants = {
//     initial: {
//       y: 0,
//     },
//     animate: {
//       y: -10,
//       scale: 1.2,
//       transition: { type: "spring", stiffness: 1000, damping: "10" },
//     },
//     hover: {
//       scale: 1.1,
//       transition: { duration: 0.2 },
//     },
//   };

//   const handleNext = () => {
//     setDirection("right");
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setDirection("left");

//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleDotClick = (index) => {
//     setDirection(index > currentIndex ? "right" : "left");
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="carousel">
//         <div className="carousel-images">
//         <AnimatePresence>
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
//             animate="visible"
//             exit="exit"
//             variants={slideVariants}
//           />
//         </AnimatePresence>
//         <div className="slide_direction">
//           <motion.div
//             variants={slidersVariants}
//             whileHover="hover"
//             className="left"
//             onClick={handlePrevious}
//           >
//             {/* <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20"
//               viewBox="0 96 960 960"
//               width="20"
//             >
//               <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
//             </svg> */}
//             <img src={LeftArrowImage} alt="" />
//           </motion.div>
//           <motion.div
//             variants={slidersVariants}
//             whileHover="hover"
//             className="right"
//             onClick={handleNext}
//           >
//             {/* <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20"
//               viewBox="0 96 960 960"
//               width="20"
//             >
//               <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
//             </svg> */}
//             <img src={RightArrowImage} alt="" />
//           </motion.div>
//         </div>
//       </div>
//       <div className="carousel-indicator">
//         {images.map((_, index) => (
//           <motion.div
//             key={index}
//             className={`dot ${currentIndex === index ? "active" : ""}`}
//             onClick={() => handleDotClick(index)}
//             initial="initial"
//             animate={currentIndex === index ? "animate" : ""}
//             whileHover="hover"
//             variants={dotsVariants}
//           ></motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Carousel;