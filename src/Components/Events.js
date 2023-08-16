import React ,{useState , useEffect , useRef} from "react";
import { motion } from "framer-motion";
import * as events from "../Styles/Events.module.css";
import Tennis from "../images/tennis.png";
import EventsCarousel from "./EventsCarousel";





const Events = props =>{

 
  return(
    <section className={events.eventsSection}>
      <h3>EVENTS</h3>
      {/* <EventsCarousel /> */}
      <div className={events.slider}>
        
      </div>
    </section>
  );
};

export default Events;