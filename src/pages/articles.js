import React from "react";
import * as styles from "../Styles/Articles.module.css";
import { backImg } from "../images/arrow.svg";

// import swiper and swiperslide
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Mousewheel } from "swiper/modules";

// PDF Compoenent
import PDFDocument from "../Components/PDFDocument";

export default function Articles() {
  return (
    <main className={styles.pageWrapper}>
      <header className={styles.heading}>
        <div className={styles.back}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
          >
            <path
              d="M47 24.5H2M2 24.5L24.5 47M2 24.5L24.5 2"
              stroke="#F5F5F5"
              stroke-width="3.85714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className={styles.title}>
          <h1>Articles</h1>
        </div>
      </header>
      <div className={styles.carouselWrapper}>
        <Swiper
          className={styles.carousel}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          spaceBetween={50}
        //   slidesPerView={1.1}
          centeredSlides={true}
          //   loop={true}
          mousewheel={{
            forceToAxis: true,
            // invert: true,
            sensitivity: 0.5,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1124: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Mousewheel]}
        >
          <SwiperSlide className={styles.slide}>
            <PDFDocument />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <PDFDocument />
          </SwiperSlide>
          {/* <SwiperSlide className={styles.slide}>
            <PDFDocument />
          </SwiperSlide> */}
        </Swiper>
      </div>

    <div className={styles.carouselControler}>
          
    </div>

    </main>
  );
}
