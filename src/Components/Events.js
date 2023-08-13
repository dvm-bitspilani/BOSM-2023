import React from "react";
import * as styles from "../Styles/Events.module.css";
import Tennis from "../images/tennis.png";

const Events = props =>{

    return(
        <section className={styles.eventsSection}>
            <h3>EVENTS</h3>
            <div className={styles.eventsContainer}>
                <div className={styles.leftSport}><img src={Tennis} /></div>
                <div><img src={Tennis} /></div>
                <div className={styles.rightSport}><img src={Tennis} /></div>
            </div>
        </section>
    );
};

export default Events;