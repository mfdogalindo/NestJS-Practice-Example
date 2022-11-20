import { Module } from '@nestjs/common';
import { PlayerController } from './players/adapters/controladores/players.controller';
import { PlayerService } from './players/domain/services/player.service';

@Module({
  imports: [],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class AppModule {}
