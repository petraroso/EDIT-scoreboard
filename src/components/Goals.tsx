import "../App.css";

interface GoalsProps {
  goals: string[];
}

const Goals: React.FC<GoalsProps> = ({ goals }) => {
  return (
    <ul className="goalList">
      {goals.map((str, index) => {
        const [score, time] = str.split(" ");
        return (
          <li key={index}>
            <em>{time.substring(0, time.length - 3)}' min</em>
            <strong>⚽️&nbsp;{score}</strong>
          </li>
        );
      })}
    </ul>
  );
};

export default Goals;
