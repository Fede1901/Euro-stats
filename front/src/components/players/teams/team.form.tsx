import { useState } from 'react';

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
  
  type TeamFormProps = {
    onAddTeam: (team: Team) => void;
  };
  
  function TeamForm({ onAddTeam }: TeamFormProps) {
    const [team, setTeam] = useState<Team>({
      fullName: '',
      country: '',
      city: '',
      stadium: '',
      stadiumCapacity: 0,
      headCoach: '',
      foundationYear: 0,
      teamColors: '',
      league: '',
      currentFifaRanking: 0,
      matchesPlayed: 0,
      matchesWon: 0,
      matchesLost: 0,
      matchesDrawn: 0,
      officialWebsite: '',
      teamLogoUrl: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setTeam({ ...team, [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAddTeam(team);
      setTeam({
        fullName: '',
        country: '',
        city: '',
        stadium: '',
        stadiumCapacity: 0,
        headCoach: '',
        foundationYear: 0,
        teamColors: '',
        league: '',
        currentFifaRanking: 0,
        matchesPlayed: 0,
        matchesWon: 0,
        matchesLost: 0,
        matchesDrawn: 0,
        officialWebsite: '',
        teamLogoUrl: ''
      });
    };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" value={team.fullName} onChange={handleChange} />
      <input name="country" placeholder="Country" value={team.country} onChange={handleChange} />
      <input name="city" placeholder="City" value={team.city} onChange={handleChange} />
      <input name="stadium" placeholder="Stadium" value={team.stadium} onChange={handleChange} />
      <input name="stadiumCapacity" placeholder="Stadium Capacity" value={team.stadiumCapacity} onChange={handleChange} type="number" />
      <input name="headCoach" placeholder="Head Coach" value={team.headCoach} onChange={handleChange} />
      <input name="foundationYear" placeholder="Foundation Year" value={team.foundationYear} onChange={handleChange} type="number" />
      <input name="teamColors" placeholder="Team Colors" value={team.teamColors} onChange={handleChange} />
      <input name="league" placeholder="League" value={team.league} onChange={handleChange} />
      <input name="currentFifaRanking" placeholder="Current FIFA Ranking" value={team.currentFifaRanking} onChange={handleChange} type="number" />
      <input name="matchesPlayed" placeholder="Matches Played" value={team.matchesPlayed} onChange={handleChange} type="number" />
      <input name="matchesWon" placeholder="Matches Won" value={team.matchesWon} onChange={handleChange} type="number" />
      <input name="matchesLost" placeholder="Matches Lost" value={team.matchesLost} onChange={handleChange} type="number" />
      <input name="matchesDrawn" placeholder="Matches Drawn" value={team.matchesDrawn} onChange={handleChange} type="number" />
      <input name="officialWebsite" placeholder="Official Website" value={team.officialWebsite} onChange={handleChange} />
      <input name="teamLogoUrl" placeholder="Team Logo URL" value={team.teamLogoUrl} onChange={handleChange} />
      <button type="submit">Add Team</button>
    </form>
  );
}

export default TeamForm;
