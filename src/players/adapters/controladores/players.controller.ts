import { PlayerEntity } from 'src/players/domain/entities/player.entity';

export interface PlayerController {
  /**
   *  Retorna la lista de jugadores
   */
  listPlayers();

  /**
   * Crea un jugador
   * @param datos Objeto con datos de jugador
   */
  create(datos: PlayerEntity);

  /**
   * Modifica datos de un jugador
   * @param datos Objeto con datos de jugador
   * @param id Identificador único del jugador
   */
  update(datos: PlayerEntity, id: string);

  /**
   * Elimina un jugador
   * @param id Identificador único del jugador
   */
  delete(id: string);

  /**
   * Cambia la edad de un jugador
   * @param id Identificador único del jugador
   * @param edad Edad del jugador
   */
  // updateAge(id: number, edad: number);
}
