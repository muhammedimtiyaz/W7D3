export const selectAllPokemon = (store) => {
  // debugger
  return Object.values(store.entities.pokemon);
};