import "../styles/statscards-lichess.css";
import { useState } from "react";
import axios from "axios";

const SteamStatsCard = () => {
  const [lichessUsername, setLichessUsername] = useState("mangoeis");
  const [blitz, setBlitz] = useState(0);
  const [rapid, setRapid] = useState(0);
  const [bullet, setBullet] = useState(0);
  const [puzzle, setPuzzle] = useState(0);
  const [playTime, setPlayTime] = useState(0);

  axios
    .get(`https://lichess.org/api/user/${lichessUsername}`)
    .then((response) => {
      setBlitz(response.data.perfs.blitz.rating);
      setRapid(response.data.perfs.rapid.rating);
      setBullet(response.data.perfs.bullet.rating);
      setPuzzle(response.data.perfs.puzzle.rating);
      setPlayTime(response.data.playTime.total);
    });

  return (
    <div className="lichess-card">
      <div className="lichess-card-header">
        <h2>Lichess.org Stats</h2>
      </div>
      <div className="lichess-card-body">
        <p>Username: {lichessUsername}</p>
        <hr />
        <h2>Rating</h2>
        <p>Rapid: {rapid}</p>
        <p>Blitz: {blitz}</p>
        <p>Bullet: {bullet}</p>
        <p>Puzzle: {puzzle}</p>
        <hr />
        <h2>Playtime</h2>
        <p>Total: {(playTime / 3600.0).toPrecision(4)} hours</p>
      </div>
    </div>
  );
};

export default SteamStatsCard;
