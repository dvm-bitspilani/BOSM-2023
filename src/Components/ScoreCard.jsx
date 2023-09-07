import React from "react";
import * as styles from "../styles/Scoreboard.module.css";

export default function ScoreCard({ data = null }) {
  const [team1, setTeam1] = React.useState(null);
  const [team2, setTeam2] = React.useState(null);
  const [score1, setScore1] = React.useState(null);
  const [score2, setScore2] = React.useState(null);
  const [event, setEvent] = React.useState(null);
  const [venue, setVenue] = React.useState(null);

  React.useEffect(() => {
    if (data && data.team_scores.length === 2) {
      if (Number(data.team_scores[0].score)>Number(data.team_scores[1].score)) {
        setTeam1(returnFirstTwoWords(data.team_scores[0].team));
        setTeam2(returnFirstTwoWords(data.team_scores[1].team));
        setScore1(data.team_scores[0].score);
        setScore2(data.team_scores[1].score);
      } else {
        setTeam1(returnFirstTwoWords(data.team_scores[1].team));
        setTeam2(returnFirstTwoWords(data.team_scores[0].team));
        setScore1(data.team_scores[1].score);
        setScore2(data.team_scores[0].score);
      }
    } else if (data && data.team_scores.length > 2) {
      setTeam1(returnFirstTwoWords(data.team_scores[0].team));
      setScore1(data.team_scores[0].score);
    }
    if (data) {
      setEvent(data.sport + " " + data.round_name);
      setVenue(data.venue);
      console.log(data.team_scores[1]);
    }
  }, [data]);

  return (
    <div className={styles.scoreCard}>
      <div className={styles.teamNames}>
        <span className={`${styles.teamName} ${styles.winningTeam}`}>
          {data === null ? "BITS P" : team1}
        </span>
        {data !== null && data.team_scores.length === 2 && (
          <>
            <span className={styles.vsText}>VS</span>
            <span className={`${styles.teamName}`}>{team2}</span>
          </>
        )}
      </div>
      <div className={styles.score}>
        <span className={`${styles.teamScore}`}>{score1}</span>
        {data !== null && data.team_scores.length === 2 && (
          <>
            <span> - </span>
            <span className={`${styles.teamScore}`}>{score2}</span>
          </>
        )}
      </div>
      <div className={styles.event}>
        {data === null ? (
          <span className={styles.eventName}>Football Round 2</span>
        ) : (
          <span className={styles.eventName}>{event}</span>
        )}
      </div>
      <div className={styles.venue}>
        <span className={styles.venueName}>
          Venue : {data === null ? "GymG" : venue}
        </span>
      </div>
    </div>
  );
}

export function returnFirstTwoWords(string) {
  const words = string.split(" ");
  return words[0] + " " + words[1];
}
