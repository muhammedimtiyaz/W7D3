import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = {};
      return Object.assign(newState, state);
  }
};

export default pokemonReducer;