import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { Team } from './teams.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])], // Registra el repositorio de Team aquí
  controllers: [TeamsController],
  providers: [TeamsService],
  exports: [TypeOrmModule], // Exporta TypeOrmModule si otros módulos lo necesitan
})
export class TeamsModule {}
