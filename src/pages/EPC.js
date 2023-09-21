import React from "react";
import { Link } from "gatsby";
import * as styles from "../Styles/Articles.module.css";

import leftArrow from "../images/aboutUsCarouselLeftArrow.png";
import rightArrow from "../images/aboutUsCarouselRightArrow.png";
// import { backImg } from "../images/arrow.svg";
import logoImg from "../images/logo.svg";

// import swiper and swiperslide
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Mousewheel } from "swiper/modules";

// PDF Compoenent
import PDFDocument from "../Components/PDFDocument";

export default function EPC() {
  return (
    <main className={styles.pageWrapper}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      {/* <meta
        name="viewport"
        content="width=device-width, user-scalable=no"
      ></meta> */}
      <header className={styles.heading}>
        <Link to="/" className={styles.back}>
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
        </Link>
        <div className={styles.title}>
          <h1>Articles</h1>
        </div>
      </header>
      <div className={styles.carouselWrapper}>
        <Swiper
          className={styles.carousel}
          // pagination={{ clickable: true }}
          // navigation={{ clickable: true }}
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
          allowTouchMove={false}
          modules={[Navigation, Mousewheel]}
        >
          <SwiperSlide className={styles.slide}>
            {/* <PDFDocument /> */}
            <div className={styles.noArticles}>
              No Articles avaialable yet
              <br />
              Check back later
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className={styles.slide}>
            <PDFDocument />
          </SwiperSlide> */}
          {/* <SwiperSlide className={styles.slide}>
            <PDFDocument />
          </SwiperSlide> */}
        </Swiper>
        <div className={styles.carouselController}>
          <button className={styles.leftArrow} onClick={()=>{
            const swiper = document.querySelector('.swiper').swiper
            swiper.slidePrev()
          }}>
            <img src={leftArrow} alt="" />
          </button>
          <div className={styles.articleAuthor}>
            <p>English Press Club</p>
          </div>
          <button className={styles.rightArrow} onClick={()=>{
            const swiper = document.querySelector('.swiper').swiper
            swiper.slideNext()
          }}>
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </main>
  );
}

export const Head = () => (
  <>
    <title>BOSM '23 | EPC Articles</title>
    <link rel="icon" type="image/x-icon" href={logoImg} />
  </>
);
