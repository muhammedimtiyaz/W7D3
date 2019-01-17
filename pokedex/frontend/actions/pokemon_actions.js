import * as Utils from '../utils/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

// normal action creators
export const receiveAllPokemon = (pokemons) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});

export const receivePokemon = (pokemon) => {
  return {
    type: RECEIVE_POKEMON,
    pokemon,
  };
};


// async action creators

export const requestAllPokemon = () => {
  return (dispatch) => {
    return Utils.fetchAllPokemon().then(pokemons => dispatch(receiveAllPokemon(pokemons)));
  };
}

export const requestPokemon = (id) => {
  return dispatch => {
    return Utils.fetchPokemon(id).then(pokemon => dispatch(receivePokemon(pokemon)));
  };
};