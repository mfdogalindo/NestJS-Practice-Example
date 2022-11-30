import { Inject, Injectable } from '@nestjs/common';
import { PlayerRepository } from 'src/players/adapters/repositories/players.repository';
import { InsertResult, UpdateResult } from 'typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { PlayerService } from './player.service';

@Injectable()
export class PlayerServiceImpl implements PlayerService {
  @Inject('PlayerRepository') private readonly repository: PlayerRepository;

  public async list(): Promise<PlayerEntity[]> {
    const result = await this.repository.findAll();
    return result;
  }

  public async create(playerData: PlayerEntity): Promise<InsertResult> {
    const newPlayer = await this.repository.create(playerData);
    return newPlayer;
  }

  public async update(
    id: string,
    playerData: PlayerEntity,
  ): Promise<UpdateResult> {
    const updatedPlayer = await this.repository.update(id, playerData);
    return updatedPlayer;
  }

  public async delete(id: string): Promise<boolean> {
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }

  // public async updateAge(id: number, edad: number): Promise<UpdateResult> {
  //   const updatedPlayer = await this.repository.update(string, { age: edad });
  //   return updatedPlayer;
  // }
}
