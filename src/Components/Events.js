import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as events from "../Styles/Events.module.css";
import Tennis from "../images/tennis.png";
import EventsCarousel from "./EventsCarousel";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { white } from "@mui/material/colors";

const Events = (props) => {
  const [progress, setProgress] = React.useState(0);

  const theme = createTheme({
    palette: {
      primary: white,
    },
  });

  return (
      <section className={events.eventsSection}>
        <h3 style={{ flex: "0 1 auto" }}>EVENTS</h3>
        <EventsCarousel setProgress={setProgress} />
        <CircularProgress
          color="inherit"
          variant="determinate"
          size={"5rem"}
          thickness={2}
          value={progress}
          // sx={{ position: "absolute", bottom: "10%", left: "50%" , transform : "translateX(-50%)"}}
        />
      </section>
  );
};

export default Events;
