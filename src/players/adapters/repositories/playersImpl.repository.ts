import { Injectable } from '@nestjs/common';
import { PlayerRepository } from './players.repository';
import { Deta } from 'deta';
import { v4 as uuidv4 } from 'uuid';

const deta = Deta('players_test');
const db = deta.Base('players');

@Injectable()
export class PlayerRepositoryImpl implements PlayerRepository {
  async findAll(): Promise<any> {
    return db.fetch({
      has_visor: true,
    });
  }

  async create(player: any) {
    return db.put(player, uuidv4());
  }

  async update(id: string, player: any) {
    return db.put(player, id);
  }

  async delete(id: string) {
    return db.delete(id);
  }
}
