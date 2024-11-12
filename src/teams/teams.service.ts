import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './createTeamDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './teams.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) // Inyecta el repositorio de Team aquí
    private teamsRepository: Repository<Team>,
  ) {}

  create(createTeamDto: CreateTeamDto) {
    const team = this.teamsRepository.create(createTeamDto);
    return this.teamsRepository.save(team);
  }

  findAll() {
    return this.teamsRepository.find();
  }

  findOne(id: number) {
    return this.teamsRepository.findOneBy({ id });
  }
}
