import { useState } from 'react';

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
  
  type PlayerFormProps = {
    onAddPlayer: (player: Player) => void;
  };
  
  function PlayerForm({ onAddPlayer }: PlayerFormProps) {
    const [player, setPlayer] = useState<Player>({
      fullName: '',
      age: 0,
      nationality: '',
      position: '',
      shirtNumber: 0,
      currentTeam: '',
      matchesPlayedCurrentSeason: 0,
      goalsScoredCurrentSeason: 0,
      assistsCurrentSeason: 0,
      yellowCards: 0,
      redCards: 0,
      height: 0,
      weight: 0,
      dominantFoot: '',
      dateOfBirth: '',
      previousTeams: '',
      careerGoals: 0,
      careerAssists: 0,
      careerMatches: 0,
      recentInjuries: '',
      socialMedia: '',
      photoUrl: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPlayer({ ...player, [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAddPlayer(player);
      setPlayer({
        fullName: '',
        age: 0,
        nationality: '',
        position: '',
        shirtNumber: 0,
        currentTeam: '',
        matchesPlayedCurrentSeason: 0,
        goalsScoredCurrentSeason: 0,
        assistsCurrentSeason: 0,
        yellowCards: 0,
        redCards: 0,
        height: 0,
        weight: 0,
        dominantFoot: '',
        dateOfBirth: '',
        previousTeams: '',
        careerGoals: 0,
        careerAssists: 0,
        careerMatches: 0,
        recentInjuries: '',
        socialMedia: '',
        photoUrl: ''
      });
    };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" value={player.fullName} onChange={handleChange} />
      <input name="age" placeholder="Age" value={player.age} onChange={handleChange} type="number" />
      <input name="nationality" placeholder="Nationality" value={player.nationality} onChange={handleChange} />
      <input name="position" placeholder="Position" value={player.position} onChange={handleChange} />
      <input name="shirtNumber" placeholder="Shirt Number" value={player.shirtNumber} onChange={handleChange} type="number" />
      <input name="currentTeam" placeholder="Current Team" value={player.currentTeam} onChange={handleChange} />
      <input name="matchesPlayedCurrentSeason" placeholder="Matches Played Current Season" value={player.matchesPlayedCurrentSeason} onChange={handleChange} type="number" />
      <input name="goalsScoredCurrentSeason" placeholder="Goals Scored Current Season" value={player.goalsScoredCurrentSeason} onChange={handleChange} type="number" />
      <input name="assistsCurrentSeason" placeholder="Assists Current Season" value={player.assistsCurrentSeason} onChange={handleChange} type="number" />
      <input name="yellowCards" placeholder="Yellow Cards" value={player.yellowCards} onChange={handleChange} type="number" />
      <input name="redCards" placeholder="Red Cards" value={player.redCards} onChange={handleChange} type="number" />
      <input name="height" placeholder="Height (cm)" value={player.height} onChange={handleChange} type="number" />
      <input name="weight" placeholder="Weight (kg)" value={player.weight} onChange={handleChange} type="number" />
      <input name="dominantFoot" placeholder="Dominant Foot" value={player.dominantFoot} onChange={handleChange} />
      <input name="dateOfBirth" placeholder="Date of Birth" value={player.dateOfBirth} onChange={handleChange} type="date" />
      <input name="previousTeams" placeholder="Previous Teams (comma-separated)" value={player.previousTeams} onChange={handleChange} />
      <input name="careerGoals" placeholder="Career Goals" value={player.careerGoals} onChange={handleChange} type="number" />
      <input name="careerAssists" placeholder="Career Assists" value={player.careerAssists} onChange={handleChange} type="number" />
      <input name="careerMatches" placeholder="Career Matches" value={player.careerMatches} onChange={handleChange} type="number" />
      <input name="recentInjuries" placeholder="Recent Injuries" value={player.recentInjuries} onChange={handleChange} />
      <input name="socialMedia" placeholder="Social Media Link" value={player.socialMedia} onChange={handleChange} />
      <input name="photoUrl" placeholder="Photo URL" value={player.photoUrl} onChange={handleChange} />
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;
