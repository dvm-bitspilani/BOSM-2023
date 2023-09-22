import React from "react";
import ScoreCard from "../Components/ScoreCard";
// import Layout from '../../Components/Layout';

import * as styles from "../Styles/scoreboard.module.css";
import { navigate } from "gatsby";
import Marquee from "react-fast-marquee";

import logoImg from "../images/logo.svg";

import CircularProgress from "@mui/material/CircularProgress";

export default function Index() {
  const [data, setData] = React.useState(null);
  const [announcement, setAnnouncement] = React.useState("");

  const [allScoreCards, setAllScoreCards] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const pRef = React.useRef(null);
  const marqueeRef = React.useRef(null);

  React.useEffect(() => {
    fetch("https://bitsbosm.org/2023/live-score/send-data")
      .then((res) => res.json())
      .then((data) => {
        // setData([...JSON.parse(data), ...JSON.parse(data), ...JSON.parse(data), ...JSON.parse(data)]);
        setData(JSON.parse(data));
      });
      
    const socket = new WebSocket("wss://bitsbosm.org/2023/ws/live_score/");
    socket.onopen = (e) => {
      console.log("connected");
      //   console.log(e.data)
    };
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    socket.onclose = () => {
      // console.log("disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

  React.useEffect(() => {
    if (data !== null) {
      // console.log(data);
      setAllScoreCards(
        data.map((item, index) => {
          if (
            item.team_scores.length < 2 ||
            (item.team_scores.length > 2 && item.winner === "None")
          ) {
            return null;
          } else {
            return <ScoreCard key={index} data={item} />;
          }
        })
      );
    }

    // temp for testing
    // setAllScoreCards(
    //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
    //     return <ScoreCard key={index} />;
    //   })
    // );

    // console.log(data);
    // console.log(announcement);
  }, [data]);

  React.useEffect(() => {
    if (announcement === "") {
      setAnnouncement(
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      );
      // setAnnouncement("BOSM 2023");
    }

    if (pRef.current !== null && marqueeRef.current !== null) {
      console.log(pRef.current.offsetWidth, marqueeRef.current.offsetWidth);
      const pWidth = pRef.current.offsetWidth;
      const marqueeWidth = marqueeRef.current.offsetWidth;
      console.log(marqueeRef.current.play);
      if (pWidth > marqueeWidth) {
        // console.log("playing");
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    }
  }, [announcement, pRef, marqueeRef]);

  // console.log(isPlaying);

  return (
    <main className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.logoDiv} onClick={() => navigate("/")}>
          <img src={logoImg} alt="logo" />
        </div>
        <h1>SCOREBOARD</h1>
      </div>
      {/* {typeof window !== "undefined" &&
      announcement !== null &&
      window.innerWidth > 768 &&
      isPlaying ? (
        <Marquee
          ref={marqueeRef}
          className={styles.announcement}
          // gradient={true}
          speed={50}
          delay={1}
          play={isPlaying}
          style={{ width: "90%" }}
        >
          <p ref={pRef}>{announcement}</p>
        </Marquee>
      ) : typeof window !== "undefined" &&
        announcement !== null &&
        window.innerWidth > 768 &&
        !isPlaying ? (
        <div
          ref={marqueeRef}
          className={styles.announcement}
          style={{ justifyContent: "center" }}
        >
          <p ref={pRef}>{announcement}</p>
        </div>
      ) : (
        <></>
      )} */}
      <div
        className={
          data || allScoreCards ? styles.scoreboardGrid : styles.loaderGrid
        }
      >
        {data || allScoreCards ? (
          <>
            {allScoreCards}
            {/* <ScoreCard /> */}
          </>
        ) : (
          <CircularProgress
            color="inherit"
            sx={{ justifySelf: "center" }}
            size={"5rem"}
          />
        )}
      </div>
    </main>
  );
}

export const Head = () => (
  <>
    <title>BOSM '23 | Scoreboard</title>
    <link rel="icon" type="image/x-icon" href={logoImg} />
  </>
);
