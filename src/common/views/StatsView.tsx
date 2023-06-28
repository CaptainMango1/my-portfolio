import ChessStatsCard from "../components/ChessStatsCard";
import "../styles/statsview.css";
import "../styles/statscards-chess.css";
import LichessStatsCard from "../components/LichessStatsCard";

const StatsView = () => {
  return (
    <div>
      <h1>Stats</h1>
      <div className="stats-container">
        <ChessStatsCard />
        <LichessStatsCard />
      </div>
    </div>
  );
};

export default StatsView;
