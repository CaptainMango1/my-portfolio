import "../styles/statscards-chess.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ChessStatsCard = () => {
  const [username, setUsername] = useState("mangoeis01");
  const [blitz, setBlitz] = useState(0);
  const [rapid, setRapid] = useState(0);
  const [bullet, setBullet] = useState(0);
  const [daily, setDaily] = useState(0);
  const [puzzle, setPuzzle] = useState(0);

  axios
    .get(`https://api.chess.com/pub/player/${username}/stats`)
    .then((response) => {
      setBlitz(response.data.chess_blitz.last.rating);
      setRapid(response.data.chess_rapid.last.rating);
      setBullet(response.data.chess_bullet.last.rating);
      setDaily(response.data.chess_daily.last.rating);
      setPuzzle(response.data.tactics.highest.rating);
    });

  return (
    <div className="chess-card">
      <div className="chess-card-header">
        <h2>Chess.com Stats</h2>
      </div>
      <div className="chess-card-body">
        <p>Username: {username}</p>
        <hr />
        <h2>Rating</h2>
        <p>Rapid: {rapid}</p>
        <p>Blitz: {blitz}</p>
        <p>Bullet: {bullet}</p>
        <p>Daily: {daily}</p>
        <p>Puzzle: {puzzle}</p>
      </div>
    </div>
  );
};
export default ChessStatsCard;
