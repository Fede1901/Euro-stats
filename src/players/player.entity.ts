import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullName!: string;

  @Column()
  age!: number;

  @Column()
  nationality!: string;

  @Column()
  position!: string;

  @Column()
  shirtNumber!: number;

  @Column()
  currentTeam!: string;

  @Column()
  matchesPlayedCurrentSeason!: number;

  @Column()
  goalsScoredCurrentSeason!: number;

  @Column()
  assistsCurrentSeason!: number;

  @Column()
  yellowCards!: number;

  @Column()
  redCards!: number;

  @Column()
  height!: number;

  @Column()
  weight!: number;

  @Column()
  dominantFoot!: string;

  @Column({ type: 'date' })
  dateOfBirth!: string;

  @Column("simple-array")
  previousTeams!: string[];

  @Column()
  careerGoals!: number;

  @Column()
  careerAssists!: number;

  @Column()
  careerMatches!: number;

  @Column()
  recentInjuries!: string;

  @Column()
  socialMedia!: string;

  @Column()
  photoUrl: string;
}
