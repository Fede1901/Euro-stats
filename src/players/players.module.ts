import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { Player } from './player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])], // Importa el repositorio de Player aquí
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [TypeOrmModule], // Exporta TypeOrmModule si otro módulo lo necesita
})
export class PlayersModule {}
