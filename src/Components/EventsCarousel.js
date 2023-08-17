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

import swimmingImg from "../Images/Events Images/Swimming.jpeg";
import badmintonImg from "../Images/Events Images/Badminton.jpeg";
import squashImg from "../Images/Events Images/Squash.png";
import tennisImg from "../Images/Events Images/tennis.jpeg";
import volleyballImg from "../Images/Events Images/volleyball.jpeg";
import hockeyImg from "../Images/Events Images/hockey.png";
import chessImg from "../Images/Events Images/chess.jpeg";

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
      </Swiper>
    </motion.div>
  );
}
