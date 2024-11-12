import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullName!: string;

  @Column()
  country!: string;

  @Column()
  city!: string;

  @Column()
  stadium!: string;

  @Column()
  stadiumCapacity!: number;

  @Column()
  headCoach!: string;

  @Column()
  foundationYear!: number;

  @Column()
  teamColors!: string;

  @Column()
  league!: string;

  @Column()
  currentFifaRanking!: number;

  @Column()
  matchesPlayed!: number;

  @Column()
  matchesWon!: number;

  @Column()
  matchesLost!: number;

  @Column()
  matchesDrawn!: number;

  @Column()
  officialWebsite!: string;

  @Column()
  teamLogoUrl!: string;
}
