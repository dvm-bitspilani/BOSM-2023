import React, { useEffect, useRef, useState } from "react";
import * as styles from '../Styles/Content.module.css'
import { Link } from "gatsby";
import { motion } from "framer-motion";

export default function Socials() {
    return (
        <div className={styles["socialsContainer"]}>
            <div className={styles["iconContainer"]}>
                <a href="https://www.instagram.com/dvmbitspilani/" target="_blank">
                    <svg className={styles["socialIcon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" fill="none" >
                        <path d="M11.4517 0H27.1317C33.105 0 37.9583 4.85333 37.9583 10.8267V26.5067C37.9583 29.3781 36.8177 32.1319 34.7873 34.1623C32.7569 36.1927 30.0031 37.3333 27.1317 37.3333H11.4517C5.47833 37.3333 0.625 32.48 0.625 26.5067V10.8267C0.625 7.95526 1.76566 5.20145 3.79606 3.17106C5.82645 1.14066 8.58026 0 11.4517 0ZM11.0783 3.73333C9.29608 3.73333 7.58682 4.44133 6.32658 5.70158C5.06633 6.96182 4.35833 8.67108 4.35833 10.4533V26.88C4.35833 30.5947 7.36367 33.6 11.0783 33.6H27.505C29.2873 33.6 30.9965 32.892 32.2568 31.6318C33.517 30.3715 34.225 28.6623 34.225 26.88V10.4533C34.225 6.73867 31.2197 3.73333 27.505 3.73333H11.0783ZM29.0917 6.53333C29.7105 6.53333 30.304 6.77917 30.7416 7.21675C31.1792 7.65434 31.425 8.24783 31.425 8.86667C31.425 9.4855 31.1792 10.079 30.7416 10.5166C30.304 10.9542 29.7105 11.2 29.0917 11.2C28.4728 11.2 27.8793 10.9542 27.4417 10.5166C27.0042 10.079 26.7583 9.4855 26.7583 8.86667C26.7583 8.24783 27.0042 7.65434 27.4417 7.21675C27.8793 6.77917 28.4728 6.53333 29.0917 6.53333ZM19.2917 9.33333C21.767 9.33333 24.141 10.3167 25.8913 12.067C27.6417 13.8173 28.625 16.1913 28.625 18.6667C28.625 21.142 27.6417 23.516 25.8913 25.2663C24.141 27.0167 21.767 28 19.2917 28C16.8163 28 14.4423 27.0167 12.692 25.2663C10.9417 23.516 9.95833 21.142 9.95833 18.6667C9.95833 16.1913 10.9417 13.8173 12.692 12.067C14.4423 10.3167 16.8163 9.33333 19.2917 9.33333ZM19.2917 13.0667C17.8065 13.0667 16.3821 13.6567 15.3319 14.7069C14.2817 15.7571 13.6917 17.1815 13.6917 18.6667C13.6917 20.1519 14.2817 21.5763 15.3319 22.6265C16.3821 23.6767 17.8065 24.2667 19.2917 24.2667C20.7769 24.2667 22.2013 23.6767 23.2515 22.6265C24.3017 21.5763 24.8917 20.1519 24.8917 18.6667C24.8917 17.1815 24.3017 15.7571 23.2515 14.7069C22.2013 13.6567 20.7769 13.0667 19.2917 13.0667Z" fill="#EEEEEE" />
                    </svg>
                </a>
            </div>
            <div className={styles["iconContainer"]}>
                <a href="www.google.com" target="_blank">
                    <svg className={styles["socialIcon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 38" fill="none">
                        <path d="M1.05548 0L16.4516 20.571L0.958252 37.296H4.44519L18.0096 22.653L28.9693 37.296H40.8355L24.5731 15.568L38.9942 0H35.5073L23.0151 13.486L12.9217 0H1.05548ZM6.18328 2.56659H11.6346L35.7069 34.729H30.2555L6.18328 2.56659Z" fill="#EEEEEE" />
                    </svg>
                </a>
            </div>
            <div className={styles["iconContainer"]}>
                <a href="https://www.facebook.com/DVMBITSPilani" target="_blank">
                    <svg className={styles["socialIcon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 38" fill="none">
                        <path d="M36.1155 0H2.88878C2.3442 0 1.82193 0.216333 1.43686 0.601408C1.05178 0.986482 0.835449 1.50876 0.835449 2.05333V35.28C0.835449 35.8246 1.05178 36.3469 1.43686 36.7319C1.82193 37.117 2.3442 37.3333 2.88878 37.3333H20.7715V22.8667H15.9181V17.2667H20.7715V13.0667C20.6709 12.0806 20.7873 11.0845 21.1125 10.1482C21.4377 9.2119 21.9638 8.35809 22.6539 7.64663C23.344 6.93518 24.1814 6.38333 25.1074 6.02978C26.0334 5.67623 27.0255 5.52954 28.0141 5.6C29.467 5.59106 30.9192 5.66585 32.3635 5.824V10.864H29.3955C27.0434 10.864 26.5955 11.984 26.5955 13.608V17.2107H32.1954L31.4675 22.8107H26.5955V37.3333H36.1155C36.3851 37.3333 36.6521 37.2802 36.9012 37.177C37.1503 37.0738 37.3767 36.9226 37.5674 36.7319C37.758 36.5413 37.9093 36.3149 38.0125 36.0658C38.1157 35.8167 38.1688 35.5496 38.1688 35.28V2.05333C38.1688 1.78369 38.1157 1.51668 38.0125 1.26756C37.9093 1.01844 37.758 0.792077 37.5674 0.601408C37.3767 0.410738 37.1503 0.259491 36.9012 0.156301C36.6521 0.0531112 36.3851 0 36.1155 0Z" fill="#EEEEEE" />
                    </svg>
                </a>
            </div>
        </div>
    )
}