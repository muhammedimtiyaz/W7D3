import * as Utils from '../utils/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

// normal action creators
export const receiveAllPokemon = (pokemons) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});


// async action creators