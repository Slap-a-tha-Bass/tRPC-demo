const MAX_POKEMON_ID = 151;

export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne
) => {
  const pokedexID = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;

  if (pokedexID !== notThisOne) return pokedexID;
  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
    const firstID = getRandomPokemon();
    const secondID = getRandomPokemon(firstID);
    return [firstID, secondID];
}