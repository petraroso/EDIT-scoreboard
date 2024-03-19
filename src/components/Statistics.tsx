import "../App.css";

interface StatisticsProps {
  title: string;
  team1: string;
  team2: string;
  stat1: number;
  setStat1: React.Dispatch<React.SetStateAction<number>>;
  stat2: number;
  setStat2: React.Dispatch<React.SetStateAction<number>>;
  clock: string;
  icon1: string;
  icon2: string;
}
//React.FC means react functional component; almost the same as function Teaam()...
const Statistics: React.FC<StatisticsProps> = ({
  title,
  team1,
  team2,
  stat1,
  setStat1,
  stat2,
  setStat2,
  clock,
  icon1,
  icon2,
}) => {
  const handleClickPlus1 = () => {
    setStat1((stat) => stat + 1);
  };

  const handleClickMinus1 = () => {
    if (stat1 > 0) {
      setStat1((stat) => stat - 1);
    }
  };

  const handleClickPlus2 = () => {
    setStat2((stat) => stat + 1);
  };

  const handleClickMinus2 = () => {
    if (stat2 > 0) {
      setStat2((stat) => stat - 1);
    }
  };

  return (
    <div>
      <h4>{title}</h4>
      <div className="statsRow">
        <div>
          <img src={icon1} className="icon" alt={`${team1} logo`} />
          <strong>{team1}</strong>
        </div>
        <span>{stat1}</span>
        <div className="buttonContainer">
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
        <span>{stat2}</span>
        <div>
          <strong>{team2}</strong>
          <img src={icon2} className="icon" alt={`${team2} logo`} />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Statistics;
