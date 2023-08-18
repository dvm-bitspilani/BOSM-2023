import React from "react";
import EventSlide from "./EventSlide";

import "../Styles/globals.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/effect-cards"
import "swiper/css/effect-creative"

// import './styles.css';

// import required modules
import {
  Pagination,
  Keyboard,
  Navigation,
  Autoplay,
  EffectCreative,
  Mousewheel,
  FreeMode,
  EffectCards
} from "swiper/modules";

import { motion } from "framer-motion";

import swimmingImg from "../images/Events Images/Swimming.jpeg";
import badmintonImg from "../images/Events Images/Badminton.jpeg";
import squashImg from "../images/Events Images/Squash.png";
import tennisImg from "../images/Events Images/tennis.jpeg";
import volleyballImg from "../images/Events Images/volleyball.jpeg";
import hockeyImg from "../images/Events Images/hockey.png";
import chessImg from "../images/Events Images/chess.jpeg";
import carromImg from "../images/Events Images/carrom.jpeg";
import cricketImg from "../images/Events Images/cricket.jpeg";
import athleticsImg from "../images/Events Images/athletics.jpeg";
import frisbeeImg from "../images/Events Images/frisbee.jpeg";
import tabletennisImg from "../images/Events Images/tabletennis.jpeg";

export default function EventsCarousel({setProgress}) {
  const swiperContainerDiv = React.useRef(null);
  const swiper = React.useRef(null);

  return (
    <motion.div
      className="swiper-container-div"
      id="eventCarousel"
      ref={swiperContainerDiv}
      // whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.15,
      }}
      // onMouseDown={() => {
      //   const swiper = document.querySelector(".swiper").swiper;
      //   swiper.pause()
      // }}
      // onMouseUp={() => {
      //   const swiper = document.querySelector(".swiper").swiper;
      //   swiper.resume()
      // }}
    >
      <Swiper
        style={{
          width: "100%",
          height: "100%",
          // overflow: "visible",
          display: "flex",
          alignItems: "center",
        }}
        ref={swiper}
        slidesPerView={1.25}
        speed={1000}
        spaceBetween={30}
        // onSlideChangeTransitionStart={() => {
        //   const swiper = document.querySelector(".swiper");
        //   swiper.style.scale = 0.9;
        // }}
        // onSlideChangeTransitionEnd={() => {
        //   const swiper = document.querySelector(".swiper");
        //   swiper.style.scale = 1;
        // }}
        // onSlideChange={() => {
        //   console.log(swiper.current.swiper.progress)
        // }}
        // onMouseDown={()=>{
        //   const swiper = document.querySelector(".swiper")
        //   swiper.style.scale = 0.9;
        // }}
        onProgress={()=>{
          const swiper = document.querySelector(".swiper").swiper
          // console.log(swiper.progress);
        }}
        // onMouseUp={()=>{
        //   const swiper = document.querySelector(".swiper");
        //   swiper.style.scale = 1;
        // }}
        centeredSlides={true}
        // centeredSlidesBounds= {true} 
        keyboard={{
          enabled: true,
        }}
        // navigation={true}
        // direction={"horizontal"}
        mousewheel={
          {
            forceToAxis: true,
            // invert: true,
            sensitivity: 0.5,
          }
        }
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          370: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1124: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        // onResize={()=>{
        //   const swiper = document.querySelector(".swiper").swiper
        //   swiper.init()
        // }}
       
        // pagination={{
        //   type: 'progressbar',
        // }}
        // effect="creative"
        creativeEffect={{
          limitProgress: 3,
          perspective: true,
          prev: {
            // shadow: true,
            translate: ["-115%", "8%", 0],
            scale: 0.9,
            rotate: [0, 0, -10],
            origin: "bottom"
          },
          next: {
            // shadow: true,
            translate: ["115%", "8%", 0],
            scale: 0.9,
            rotate: [0, 0, 10],
            origin: "bottom"
          },
        }}
        // creativeEffect={{
        //   limitProgress: 4,
        //   prev: {
        //     // shadow: true,
        //     translate: ["-115%", 0, 0],
        //     scale: 0.8,
        //   },
        //   next: {
        //     // shadow: true,
        //     translate: ["115%", 0, 0],
        //     scale: 0.8,
        //   },
        // }}

        // longSwipes={true}
        // longSwipesRatio={0.5}
        // resistanceRatio={0.5}
        // touchRatio={0.5}
        // parallax={true}
        
        freeMode={{
          enabled: true,
          momentumRatio: 0.1,
          momentumVelocityRatio: 0.1,
          sticky: true,
        }}

        effect="creative"
        // effect={typeof window !== "undefined" && window.innerWidth < 711 ? "cards" : "creative"}
        // effect={"cards"}
        cardsEffect={{
          slideShadows: false,
          // perSlideOffset: 0,
          // perSlideRotate: 0,
        }}
        simulateTouch={true}
        onRealIndexChange={()=>{
          const swiper = document.querySelector(".swiper").swiper
          setProgress(Math.round(swiper.realIndex/swiper.slides.length*100))
        }}

        modules={[
          Keyboard,
          Pagination,
          Navigation,
          Autoplay,
          Mousewheel,
          EffectCreative,
          EffectCards,
          FreeMode,
        ]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Swimming" img={swimmingImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Badminton" img={badmintonImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Squash" img={squashImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Tennis" img={tennisImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Volleyball" img={volleyballImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Hockey" img={hockeyImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Chess" img={chessImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Carrom" img={carromImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Cricket" img={cricketImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Athletics" img={athleticsImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Frisbee" img={frisbeeImg} />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Table Tennis" img={tabletennisImg} />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
