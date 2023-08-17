import React from "react";
import EventSlide from "./EventSlide";

import "../Styles/globals.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

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

export default function EventsCarousel() {
  return (
    <motion.div
    className="swiper-container-div"
      whileTap={{ scale: 0.9 }}
    >
      <Swiper
        style={{
          width: "100%",
          height: "100%",
          // overflow: "visible",
          display: "flex",
          alignItems: "center",
        }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Swimming" img={swimmingImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Badminton" img={badmintonImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Squash" img={squashImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Tennis" img={tennisImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Volleyball" img={volleyballImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Hockey" img={hockeyImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Chess" img={chessImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
          <EventSlide sport="Carrom" img={carromImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
        <EventSlide sport="Cricket" img={cricketImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
        <EventSlide sport="Athletics" img={athleticsImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }}
        >
        <EventSlide sport="Frisbee" img={frisbeeImg}/>
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "start" }} 
        >
        <EventSlide sport="Table Tennis" img={tabletennisImg}/>
        </SwiperSlide>
        
      </Swiper>
    </motion.div>
  );
}
