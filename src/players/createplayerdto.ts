import { IsString, IsInt, IsNumber, IsArray, IsDateString, IsUrl } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  fullName!: string;

  @IsInt()
  age!: number;

  @IsString()
  nationality!: string;

  @IsString()
  position!: string;

  @IsInt()
  shirtNumber!: number;

  @IsString()
  currentTeam!: string;

  @IsInt()
  matchesPlayedCurrentSeason!: number;

  @IsInt()
  goalsScoredCurrentSeason!: number;

  @IsInt()
  assistsCurrentSeason!: number;

  @IsInt()
  yellowCards!: number;

  @IsInt()
  redCards!: number;

  @IsNumber()
  height!: number;

  @IsNumber()
  weight!: number;

  @IsString()
  dominantFoot!: string;

  @IsDateString()
  dateOfBirth!: string;

  @IsArray()
  @IsString({ each: true })
  previousTeams!: string[];

  @IsInt()
  careerGoals!: number;

  @IsInt()
  careerAssists!: number;

  @IsInt()
  careerMatches!: number;

  @IsString()
  recentInjuries!: string;

  @IsString()
  socialMedia!: string;

  @IsUrl()
  photoUrl: string;
}
