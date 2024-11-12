import { useState } from 'react';
import './App.css';

import PlayerForm from './components/players/player.form';
import TeamForm from '../src/components/players/teams/team.form';
import PlayerList from './components/players/player.list';
import TeamList from '../src/components/players/teams/team.list';

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

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  const addPlayer = (player: Player) => {
    setPlayers([...players, player]);
  };

  const addTeam = (team: Team) => {
    setTeams([...teams, team]);
  };

  return (
    <div className="App">
      <h1>Sports Management App</h1>

      {/* Formularios para agregar jugadores y equipos */}
      <PlayerForm onAddPlayer={addPlayer} />
      <TeamForm onAddTeam={addTeam} />

      {/* Listas de jugadores y equipos */}
      <PlayerList players={players} />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
