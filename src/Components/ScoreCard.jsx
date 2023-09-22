import React from "react";
import * as styles from "../Styles/scoreboard.module.css";

export default function ScoreCard({ data = null }) {
  const [team1, setTeam1] = React.useState(null);
  const [team2, setTeam2] = React.useState(null);
  const [score1, setScore1] = React.useState(null);
  const [score2, setScore2] = React.useState(null);
  const [event, setEvent] = React.useState(null);
  const [venue, setVenue] = React.useState(null);

  React.useEffect(() => {
    if (data && data.team_scores.length === 2) {
        setTeam1(data.team_scores[0].team);
        setTeam2(data.team_scores[1].team);
        setScore1(data.team_scores[0].score);
        setScore2(data.team_scores[1].score);

    } else if (data && data.team_scores.length > 2) {
      const winnerIndex = returnWinnerIndex(data);
      // console.log(winnerIndex);
      setTeam1(data.team_scores[winnerIndex].team);
      setScore1(data.team_scores[winnerIndex].score);
    }
    if (data) {
      setEvent(data.sport + " " + data.round_name);
      setVenue(data.venue);
      // console.log(data.team_scores[1]);
    }
  }, [data]);

  return (
    <div className={styles.scoreCard}>
      <div className={styles.event}>
        {data === null ? (
          <span className={styles.eventName}>Football Round 2</span>
        ) : (
          <span className={styles.eventName}>{event}</span>
        )}
      </div>
      <div className={styles.teamNames}>
        <span className={`${styles.teamName} ${team2 && team1 !== data.winner && data.winner !== "" && styles.winningTeam}`}>
          {data === "" ? "BITS P" : team1}
        </span>
        {data !== null && data.team_scores.length === 2 && (
          <>
            <span className={styles.vsText}>VS</span>
            <span className={`${styles.teamName} ${team2 && team2 !== data.winner && data.winner !== "" && styles.winningTeam}`}>{team2}</span>
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
      <div className={styles.venue}>
        <span className={styles.venueName}>
          Venue : {data === null ? "GymG" : venue}
        </span>
      </div>
    </div>
  );
}

export function returnFirstTwoWords(string) {
  const words = string.replace(":", "").split(" ");
  return words[0] + " " + words[1];
}

export function returnWinnerIndex(object){
  let index = 0;
  if (object == null) return 0;
  // console.log(object.winner);
  object.team_scores.forEach((score) => {
    // console.log(score);
    // console.log(score.team === object.winner)
    if (score.team === object.winner) {
      index = object.team_scores.indexOf(score)
    }})
    return index;
    // return 1;
}