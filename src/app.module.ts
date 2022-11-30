import { Module } from '@nestjs/common';
import { PlayerControllerImpl } from './players/adapters/controladores/playersImpl.controller';
import { PlayerServiceImpl } from './players/domain/services/playerImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlayerRepositoryImpl } from './players/adapters/repositories/playersImpl.repository';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [PlayerControllerImpl],
  providers: [
    {
      provide: 'PlayerService',
      useClass: PlayerServiceImpl,
    },
    {
      provide: 'PlayerRepository',
      useClass: PlayerRepositoryImpl,
    },
  ],
})
export class AppModule {}
