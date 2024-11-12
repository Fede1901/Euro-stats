// Definimos el tipo para un objeto Team
type Team = {
    fullName: string;
    country: string;
    city: string;
    stadium: string;
    stadiumCapacity: number;
    headCoach: string;
    foundationYear: number;
    teamColors: string;
    league: string;
    currentFifaRanking: number;
    matchesPlayed: number;
    matchesWon: number;
    matchesLost: number;
    matchesDrawn: number;
    officialWebsite: string;
    teamLogoUrl: string;
  };
  
  type TeamListProps = {
    teams: Team[];
  };
  
  function TeamList({ teams }: TeamListProps) {
    return (
      <div>
        <h2>Team List</h2>
        <ul>
          {teams.map((team, index) => (
            <li key={index} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
              <img src={team.teamLogoUrl} alt={team.fullName} style={{ width: '100px', height: '100px' }} />
              <h3>{team.fullName}</h3>
              <p>Country: {team.country}</p>
              <p>City: {team.city}</p>
              <p>Stadium: {team.stadium} (Capacity: {team.stadiumCapacity} seats)</p>
              <p>Head Coach: {team.headCoach}</p>
              <p>Foundation Year: {team.foundationYear}</p>
              <p>Team Colors: {team.teamColors}</p>
              <p>League: {team.league}</p>
              <p>FIFA Ranking: {team.currentFifaRanking}</p>
              <p>Matches Played: {team.matchesPlayed}</p>
              <p>Matches Won: {team.matchesWon}</p>
              <p>Matches Lost: {team.matchesLost}</p>
              <p>Matches Drawn: {team.matchesDrawn}</p>
              <p>Official Website: <a href={team.officialWebsite} target="_blank" rel="noopener noreferrer">{team.officialWebsite}</a></p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TeamList;
  