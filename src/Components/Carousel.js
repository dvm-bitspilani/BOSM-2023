import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import Video from "./Video"
import * as carousel from "../Styles/Carousel.module.css"
import RightArrowImage from "../images/aboutUsCarouselRightArrow.png";
import LeftArrowImage from "../images/aboutUsCarouselLeftArrow.png";
import thumbnail from "../images/thumbnail.png"

import { IMAGES } from "./Images"

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const App = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])

  const activeImageIndex = wrap(0, IMAGES.length, imageCount)

  const swipeToImage = swipeDirection => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
  }

  const dragEndHandler = dragInfo => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }



  return (
    <div className={carousel["carousel"]}>
      <div className={carousel["sliderContainer"]}>
        <div className={carousel["slider"]}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                background: `url(${thumbnail})`
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className={carousel["image"]}
            ><Video
            videoSrcURL={IMAGES[activeImageIndex].videoSrc}
            videoTitle={IMAGES[activeImageIndex].videoTitle} 
            ></Video></motion.div>
          </AnimatePresence>
        </div>

        <div className={carousel["buttons"]}>
          <button onClick={() => swipeToImage(-1)}><img src={LeftArrowImage} alt="<"></img></button>
          <button onClick={() => swipeToImage(1)}><img src={RightArrowImage} alt=">"></img></button>
        </div>
      </div>

      {/* <div className={carousel["thumbnails"]}>
        {IMAGES.map(image => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className={carousel["thumbnailContainer"]}
          >
            <img src={image.imageSrc} alt="Musician" />
            <div
              className={`${carousel["activeIndicator"]} ${
                image.id === activeImageIndex ? carousel["active"] : null
              }`}
            />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default App
