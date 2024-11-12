import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './createplayerdto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';


@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) // Inyecta el repositorio de Player aquí
    private playersRepository: Repository<Player>,
  ) {}

  create(createPlayerDto: CreatePlayerDto) {
    const player = this.playersRepository.create(createPlayerDto);
    return this.playersRepository.save(player);
  }

  findAll() {
    return this.playersRepository.find();
  }

  findOne(id: number) {
    return this.playersRepository.findOneBy({ id });
  }
}
