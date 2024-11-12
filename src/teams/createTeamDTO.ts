import { IsString, IsInt, IsUrl } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  fullName!: string;

  @IsString()
  country!: string;

  @IsString()
  city!: string;

  @IsString()
  stadium!: string;

  @IsInt()
  stadiumCapacity!: number;

  @IsString()
  headCoach!: string;

  @IsInt()
  foundationYear!: number;

  @IsString()
  teamColors!: string;

  @IsString()
  league!: string;

  @IsInt()
  currentFifaRanking!: number;

  @IsInt()
  matchesPlayed!: number;

  @IsInt()
  matchesWon!: number;

  @IsInt()
  matchesLost!: number;

  @IsInt()
  matchesDrawn!: number;

  @IsUrl()
  officialWebsite!: string;

  @IsUrl()
  teamLogoUrl!: string;
}
