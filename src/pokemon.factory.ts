import { Pokemon } from './pokemon.class';

export default abstract class PokemonCreator {
  public abstract factoryMethod(): Pokemon;

  public toString(): string {
    const absPokemon = this.factoryMethod();
    return `This pokemon is ${absPokemon.getName()} `
         + `and its a ${absPokemon.getType()} type one`;
  }
}

