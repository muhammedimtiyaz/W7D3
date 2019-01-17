import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = {};
      const pokemons = action.pokemons
      return merge(newState, state, pokemons);
    default:
      return state;
  }
};

export default pokemonReducer;
