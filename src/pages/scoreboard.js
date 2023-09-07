import React from "react";
import ScoreCard from "../Components/ScoreCard";
// import Layout from '../../Components/Layout';
import * as styles from "../Styles/scoreboard.module.css";
import { navigate } from "gatsby";

import logoImg from "../images/logo.svg";

import CircularProgress from "@mui/material/CircularProgress";

export default function Index() {
  const [data, setData] = React.useState(null);
  const [allScoreCards, setAllScoreCards] = React.useState(null);

  React.useEffect(() => {
    const socket = new WebSocket("wss://test.bitsbosm.org/2023/ws/live_score/");
    socket.onopen = (e) => {
      // console.log("connected");
      //   console.log(e.data)
      fetch("https://test.bitsbosm.org/2023/live-score/send-data")
        .then((res) => res.json())
        .then((data) => {
          setData(JSON.parse(data));
        });
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
    if (data) {
      // console.log(data);

      setAllScoreCards(
        data.map((item, index) => {
          if (item.team_scores.length < 2) {
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

  }, [data]);

  return (
    <main className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.logoDiv} onClick={() => navigate("/")}>
          <img src={logoImg} alt="logo" />
        </div>
        <h1>SCOREBOARD</h1>
      </div>
      <div className={data ? styles.scoreboardGrid : styles.loaderGrid}>
        {data ? (
          allScoreCards
        ) : (
          <CircularProgress
            color="inherit"
            sx={{ justifySelf: "center" }}
            size={"7rem"}
          />
        )}
      </div>
    </main>
  );
}
