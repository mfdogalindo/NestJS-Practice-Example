import { PlayerEntity } from 'src/players/domain/entities/player.entity';

export interface PlayerRepository {
  findAll(): Promise<any>;
  create(player: PlayerEntity): Promise<any>;
  update(id: string, player: PlayerEntity): Promise<any>;
  delete(id: string): Promise<any>;
}
