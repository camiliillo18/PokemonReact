let pokemons = [];

export const getPokemons = () => {
  return pokemons;
};

export const addPokemon = (pokemon) => {
  pokemons.push(pokemon);
};

export const getPokemonById = async (id) => {
  const pokemon = pokemons.find(p => p.id === id);
  if (pokemon) {
    return pokemon;
  } else {
    throw new Error('Pokemon not found');
  }
};

export const deletePokemonById = async (id) => {
  pokemons = pokemons.filter(p => p.id !== id);
}

export const updatePokemonName = async (id, newName) => {
  const pokemon = pokemons.find(p => p.id === id);
  if (pokemon) {
    pokemon.nombre = newName;
  } else {
    throw new Error('Pokemon not found');
  }
};