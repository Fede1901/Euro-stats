import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'sports_portal',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),   
    PlayersModule,
    TeamsModule,
  ],
})
export class AppModule {}
