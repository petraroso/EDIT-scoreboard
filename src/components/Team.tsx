import "../App.css";

interface TeamProps {
  icon: string;
  name: string;
}
//React.FC means react functional component; almost the same as function Teaam()...
const Team: React.FC<TeamProps> = ({ icon, name }) => {
  return (
    <div className="team">
      <img src={icon} className="logo" alt={`${name} logo`} />
      <h2>{name}</h2>
    </div>
  );
};

export default Team;
