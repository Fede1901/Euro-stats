// Definimos el tipo para un objeto Player
type Player = {
    fullName: string;
    age: number;
    nationality: string;
    position: string;
    shirtNumber: number;
    currentTeam: string;
    matchesPlayedCurrentSeason: number;
    goalsScoredCurrentSeason: number;
    assistsCurrentSeason: number;
    yellowCards: number;
    redCards: number;
    height: number;
    weight: number;
    dominantFoot: string;
    dateOfBirth: string;
    previousTeams: string;
    careerGoals: number;
    careerAssists: number;
    careerMatches: number;
    recentInjuries: string;
    socialMedia: string;
    photoUrl: string;
  };
  
  type PlayerListProps = {
    players: Player[];
  };
  
  function PlayerList({ players }: PlayerListProps) {
    return (
      <div>
        <h2>Player List</h2>
        <ul>
          {players.map((player, index) => (
            <li key={index} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
              <img src={player.photoUrl} alt={player.fullName} style={{ width: '100px', height: '100px' }} />
              <h3>{player.fullName}</h3>
              <p>Age: {player.age}</p>
              <p>Nationality: {player.nationality}</p>
              <p>Position: {player.position}</p>
              <p>Shirt Number: {player.shirtNumber}</p>
              <p>Current Team: {player.currentTeam}</p>
              <p>Matches Played (Season): {player.matchesPlayedCurrentSeason}</p>
              <p>Goals Scored (Season): {player.goalsScoredCurrentSeason}</p>
              <p>Assists (Season): {player.assistsCurrentSeason}</p>
              <p>Yellow Cards: {player.yellowCards}</p>
              <p>Red Cards: {player.redCards}</p>
              <p>Height: {player.height} cm</p>
              <p>Weight: {player.weight} kg</p>
              <p>Dominant Foot: {player.dominantFoot}</p>
              <p>Date of Birth: {player.dateOfBirth}</p>
              <p>Previous Teams: {player.previousTeams}</p>
              <p>Career Goals: {player.careerGoals}</p>
              <p>Career Assists: {player.careerAssists}</p>
              <p>Career Matches: {player.careerMatches}</p>
              <p>Recent Injuries: {player.recentInjuries}</p>
              <p>Social Media: {player.socialMedia}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PlayerList;
  