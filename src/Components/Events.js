import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import * as events from "../Styles/Events.module.css";

import EventsCarousel from "./EventsCarousel";
import CircularProgress from "@mui/material/CircularProgress";

//importing all images
import badmintonIcon from "../images/Events Sports Icons/badminton.svg"
import swimmingIcon from "../images/Events Sports Icons/swimming.svg"
import squashIcon from "../images/Events Sports Icons/squash.svg"
import tennisIcon from "../images/Events Sports Icons/tennis.svg"
import volleyballIcon from "../images/Events Sports Icons/volleyball.svg"
import hockeyIcon from "../images/Events Sports Icons/hockey.svg"
import chessIcon from "../images/Events Sports Icons/chess.svg"
import carromIcon from "../images/Events Sports Icons/carrom.svg"
import cricketIcon from "../images/Events Sports Icons/cricket.svg"
import athleticsIcon from "../images/Events Sports Icons/athletics.svg"
import frisbeeIcon from "../images/Events Sports Icons/frisbee.svg"
import tabletennisIcon from "../images/Events Sports Icons/tabletennis.svg"

const Events = (props) => {
  const [progress, setProgress] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  const allImages = [
    badmintonIcon,
    swimmingIcon,
    squashIcon,
    tennisIcon,
    volleyballIcon,
    hockeyIcon,
    chessIcon,
    carromIcon,
    cricketIcon,
    athleticsIcon,
    frisbeeIcon,
    tabletennisIcon,
  ];

  return (
      <section className={events.eventsSection}>
        <h3 style={{ flex: "0 1 auto" }}>EVENTS</h3>
        <EventsCarousel setProgress={setProgress} setIndex={setIndex}/>
        <CircularProgress
          color="inherit"
          variant="determinate"
          size={"5rem"}
          thickness={2}
          value={progress}
          // sx={{ position: "absolute", bottom: "10%", left: "50%" , transform : "translateX(-50%)"}}
        />
        <img src={allImages[index]} alt="icon" className={events.icon}/>
      </section>
  );
};

export default Events;
