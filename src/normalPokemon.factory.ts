import { Pokemon } from './pokemon.class';
import Factory from './pokemon.factory';
import { Measures, PokemonType, Stats } from './pokemon.interfaces';

export default class NormalPokemonCreator extends Factory {
  private readonly _name: string;

  private readonly _shape: Measures;

  private readonly _type: PokemonType;

  private _stats: Stats;

  constructor(name: string, shape: Measures, stats: Stats) {
    super();
    this._name = name;
    this._shape = shape;
    this._type = 'normal';
    this._stats = stats;
  }

  get stats(): Stats {
    return this._stats;
  }

  set stats(value: Stats) {
    this._stats = value;
  }

  get name(): string {
    return this._name;
  }

  get shape(): Measures {
    return this._shape;
  }

  get type(): PokemonType {
    return this._type;
  }

  public factoryMethod(): Pokemon {
    return new Pokemon(this.name, this.type, this.shape, this.stats);
  }
}
