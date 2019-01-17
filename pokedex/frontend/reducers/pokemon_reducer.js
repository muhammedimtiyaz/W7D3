import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      // const newState = {};
      // const pokemons = action.pokemons
      return merge({}, state, action.pokemons);
    case RECEIVE_POKEMON:
      return merge({}, state, { [action.pokemon.id] : action.pokemon})
    default:
      return state;
  }
};

export default pokemonReducer;
