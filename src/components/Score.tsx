import "../App.css";

interface ScoreProps {
  score1: number;
  setScore1: React.Dispatch<React.SetStateAction<number>>;
  score2: number;
  setScore2: React.Dispatch<React.SetStateAction<number>>;
  setGoals: React.Dispatch<React.SetStateAction<string[]>>;
  clock: string;
}

const Score: React.FC<ScoreProps> = ({
  score1,
  score2,
  setScore1,
  setScore2,
  setGoals,
  clock,
}) => {
  const handleClickPlus1 = () => {
    const updatedScore1 = score1 + 1;
    setScore1(updatedScore1);
    addGoal(`${updatedScore1}:${score2}`, clock);
  };

  const handleClickMinus1 = () => {
    if (score1 > 0) {
      const updatedScore1 = score1 - 1;
      setScore1(updatedScore1);
      addGoal(`${updatedScore1}:${score2}`, clock);
    }
  };

  const handleClickPlus2 = () => {
    const updatedScore2 = score2 + 1;
    setScore2(updatedScore2);
    addGoal(`${score1}:${updatedScore2}`, clock);
  };

  const handleClickMinus2 = () => {
    if (score2 > 0) {
      const updatedScore2 = score2 - 1;
      setScore2(updatedScore2);
      addGoal(`${score1}:${updatedScore2}`, clock);
    }
  };

  const addGoal = (newGoal: string, clock: string) => {
    setGoals((prevGoals) => [...prevGoals, `${newGoal} ${clock}`]);
  };

  return (
    <div>
      <p className="bigScore">
        {score1}:{score2}
      </p>
      <div className="buttonContainer" id="scoreButtons">
        <div className="button">
          <button disabled={clock == "0:00"} onClick={handleClickMinus1}>
            -
          </button>
        </div>
        <div className="button">
          <button disabled={clock == "0:00"} onClick={handleClickPlus1}>
            +
          </button>
        </div>
        <div className="button">
          <button disabled={clock == "0:00"} onClick={handleClickMinus2}>
            -
          </button>
        </div>
        <div className="button">
          <button disabled={clock == "0:00"} onClick={handleClickPlus2}>
            +
          </button>
        </div>
      </div>
      {clock == "0:00" && (
        <label htmlFor="scoreButtons">
          Pokrenite sat da biste upravljali rezulatom
        </label>
      )}
    </div>
  );
};

export default Score;
