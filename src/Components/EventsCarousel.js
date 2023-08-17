import React from "react";
import EventSlide from "./EventSlide";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";

export default function EventsCarousel() {
  return (
    <motion.div
      style={{ width: "100%", flex: "1 1 auto", overflow: "visible" }}
      whileTap={{ scale: 0.9 }}
    >
      <Swiper
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
        }}
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Tennis" />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Basketball" />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Soccer" />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Volleyball" />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Crciket" />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Badminton" />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Table Tennis" />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Hockey" />
        </SwiperSlide>
        <SwiperSlide
          style={{ overflow: "visible", display: "flex", alignItems: "center" }}
        >
          <EventSlide sport="Baseball" />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
