import { describe, it } from 'mocha';
import { expect } from 'chai';
import PokemonCreator from '../src/pokemon.factory';
import FirePokemonCreator from '../src/firePokemon.factory';
import LeafPokemonCreator from '../src/leafPokemon.factory';
import WaterPokemonCreator from '../src/waterPokemon.factory';
import ElectricPokemonCreator from '../src/electricPokemon.factory';
import NormalPokemonCreator from '../src/normalPokemon.factory';
import { Measures, Stats } from '../src/pokemon.interfaces';

describe('Test as client code for factory method pokemon class', () => {
  function everyPokemonToString(pokemonCreator: PokemonCreator): string {
    return pokemonCreator.toString();
  }
  const defaultShape: Measures = { height: 0, weight: 0 };
  const defaultStats: Stats = {
    hp: 0,
    atk: 0,
    def: 0,
    spd: 0,
  };
  it('Normal Pokemon Creator works with client code function', () => {
    expect(
      everyPokemonToString(new NormalPokemonCreator('ratata', defaultShape, defaultStats)),
    )
      .to
      .be
      .eq('This pokemon is ratata and its a normal type one');
  });
  it('Fire Pokemon Creator works with client code function', () => {
    expect(
      everyPokemonToString(new FirePokemonCreator('charmander', defaultShape, defaultStats)),
    )
      .to
      .be
      .eq('This pokemon is charmander and its a fire type one');
  });
  it('Leaf Pokemon Creator works with client code function', () => {
    expect(
      everyPokemonToString(new LeafPokemonCreator('bulbasaur', defaultShape, defaultStats)),
    )
      .to
      .be
      .eq('This pokemon is bulbasaur and its a leaf type one');
  });
  it('Water Pokemon Creator works with client code function', () => {
    expect(
      everyPokemonToString(new WaterPokemonCreator('squirtle', defaultShape, defaultStats)),
    )
      .to
      .be
      .eq('This pokemon is squirtle and its a water type one');
  });
  it('Electric Pokemon Creator works with client code function', () => {
    expect(
      everyPokemonToString(new ElectricPokemonCreator('pikachu', defaultShape, defaultStats)),
    )
      .to
      .be
      .eq('This pokemon is pikachu and its a electric type one');
  });
});
