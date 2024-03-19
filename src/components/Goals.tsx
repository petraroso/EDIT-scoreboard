import "../App.css";

interface GoalsProps {
  goals: string[];
}

const Goals: React.FC<GoalsProps> = ({ goals }) => {
  return (
    <ul className="goalList">
      {goals.map((str, index) => {
        return (
          <li key={index}>
            <em>{str.substring(4, str.length - 3)}' min</em>
            <strong>⚽️&nbsp;{str.substring(0, 3)}</strong>
          </li>
        );
      })}
    </ul>
  );
};

export default Goals;
