import { Module } from '@nestjs/common';
import { PlayerControllerImpl } from './players/adapters/controladores/playersImpl.controller';
import { PlayerServiceImpl } from './players/domain/services/playerImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './players/domain/entities/player.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://admin:AdminPass321@cluster0.gptsjcx.mongodb.net/?retryWrites=true&w=majority',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true, // Solo para desarrollo
      logging: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([PlayerEntity]),
    UsersModule,
  ],
  controllers: [PlayerControllerImpl],
  providers: [
    {
      provide: 'PlayerService',
      useClass: PlayerServiceImpl,
    },
  ],
})
export class AppModule {}
