import React from 'react'
import * as styles from '../Styles/EventsSlide.module.css'

export default function EventSlide({img, sport}) {
  return (
    <div className={styles["slide"]}>
        <img src={img} alt="sport" />
        <h4 className={styles["slideText"]}>{sport}</h4>
    </div>
  )
}
