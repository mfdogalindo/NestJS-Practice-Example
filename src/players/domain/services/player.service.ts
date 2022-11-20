import { Injectable } from '@nestjs/common';
import { Player } from '../models/player.model';

@Injectable()
export class PlayerService {

  private player: Player[] = [{
    name: 'Leo',
    lastName: 'Messi',
    age: 35,
    team: 'Argentina'
  }]

  public listar() : Player[] {
    return this.player
  }

  public crear(jugador: Player): Player {
    this.player.push(jugador);
    return jugador;
  }

  public modificar(id: number, jugador: Player): Player {
      this.player[id] = jugador
      return this.player[id];
  }

  public eliminar(id: number): boolean {
    const totalJugadoresAntes = this.player.length;
    this.player = this.player.filter((val, index) => index != id);
    if(totalJugadoresAntes == this.player.length){
      return false;
    }
    else{
      return true;
    }
  }

   public cambiarEdad(id: number, edad: number): Player {
      this.player[id].age = edad;
      return this.player[id];
   }

}
