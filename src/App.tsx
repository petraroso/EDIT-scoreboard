import "./App.css";
import Team from "./components/Team";
import Score from "./components/Score";
import DateClock from "./components/DateClock";
import Goals from "./components/Goals";
import { useState } from "react";
import Statistics from "./components/Statistics";
import team1Logo from "./assets/chelsea.png";
import team2Logo from "./assets/arsenal.png";

function App() {
  const team1 = "Chelsea";
  const team2 = "Arsenal";
  const initialScore1 = 0;
  const initialScore2 = 0;
  const initialClock = "0:00";
  const initialGoals: string[] = [];
  const initialClockButtonLabel = "Pokreni ⏱️";

  const [score1, setScore1] = useState(initialScore1);
  const [score2, setScore2] = useState(initialScore2);
  const [clock, setClock] = useState(initialClock);
  const [goals, setGoals] = useState(initialGoals);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const [clockButtonLabel, setClockButtonLabel] = useState<string>(
    initialClockButtonLabel
  );
  const [startTime, setStartTime] = useState<Date | undefined>(undefined);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [hits1, setHits1] = useState(0);
  const [fouls1, setFouls1] = useState(0);
  const [yellowCards1, setYellowCards1] = useState(0);
  const [hits2, setHits2] = useState(0);
  const [fouls2, setFouls2] = useState(0);
  const [yellowCards2, setYellowCards2] = useState(0);

  const resetStates = () => {
    setScore1(initialScore1);
    setScore2(initialScore2);
    setClock(initialClock);
    setGoals(initialGoals);
    clearInterval(intervalId);
    setClockButtonLabel(initialClockButtonLabel);
    setHits1(0);
    setFouls1(0);
    setYellowCards1(0);
    setHits2(0);
    setFouls2(0);
    setYellowCards2(0);
    setStartTime(undefined);
    setElapsedTime(0);
  };

  return (
    <>
      <DateClock
        clock={clock}
        setClock={setClock}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
        buttonLabel={clockButtonLabel}
        setButtonLabel={setClockButtonLabel}
        startTime={startTime}
        setStartTime={setStartTime}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
      />
      <div className="scoreboard">
        <Team icon={team1Logo} name={team1} />
        <Score
          score1={score1}
          score2={score2}
          setScore1={setScore1}
          setScore2={setScore2}
          setGoals={setGoals}
          clock={clock}
        />
        <Team icon={team2Logo} name={team2} />
      </div>
      <Goals goals={goals} />
      <Statistics
        title="Udarci"
        team1={team1}
        team2={team2}
        stat1={hits1}
        setStat1={setHits1}
        stat2={hits2}
        setStat2={setHits2}
        clock={clock}
        icon1={team1Logo}
        icon2={team2Logo}
      />
      <Statistics
        title="Prekršaji"
        team1={team1}
        team2={team2}
        stat1={fouls1}
        setStat1={setFouls1}
        stat2={fouls2}
        setStat2={setFouls2}
        clock={clock}
        icon1={team1Logo}
        icon2={team2Logo}
      />
      <Statistics
        title="Kartoni"
        team1={team1}
        team2={team2}
        stat1={yellowCards1}
        setStat1={setYellowCards1}
        stat2={yellowCards2}
        setStat2={setYellowCards2}
        clock={clock}
        icon1={team1Logo}
        icon2={team2Logo}
      />
      <div className="button">
        <button className="resetButton" onClick={resetStates}>
          Resetiraj sve vrijednosti
        </button>
      </div>
    </>
  );
}

export default App;
