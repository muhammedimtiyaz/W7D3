import React from 'react';
import ReactDOM from 'react-dom';
import configStore from "./store/store";
// import {fetchAllPokemon} from  "./utils/api_util";
// import {receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions";
// import {selectAllPokemon} from "./reducers/selectors";
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configStore();
  // window.store = store;
  // window.selectAllPokemon = selectAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.dispatch = store.dispatch;
  // window.getState = store.getState;
  // window.requestAllPokemon = requestAllPokemon;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
  
});