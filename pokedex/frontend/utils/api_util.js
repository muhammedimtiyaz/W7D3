export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "api/pokemons"
  });
};


export const fetchPokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/pokemons/${id}`,
  });
}

export const fetchAllItems = () => {
  return $.ajax({
    method: 'GET',
    // url here
  });
}

// export default fetchAllPokemon;