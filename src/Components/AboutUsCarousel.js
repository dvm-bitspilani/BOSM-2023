import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <div className="about-us-carousel">
      <div className="about-us-carousel-top">
        <motion.div
          className="about-us-carousel-prev"
          onClick={handlePrevious}
          variants={slidersVariants}
          whileHover="hover"
        >
          <img src={LeftArrowImage} alt="" />
        </motion.div>
        <div className="about-us-carousel-img-wrapper">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={direction === "about-us-right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
            />
          </AnimatePresence>
        </div>
        <motion.div
          className="about-us-carousel-next"
          onClick={handleNext}
          variants={slidersVariants}
          whileHover="hover"
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
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsCarousel;
