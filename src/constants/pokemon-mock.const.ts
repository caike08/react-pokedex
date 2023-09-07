export const POKEMON_DETAILS = {
  name: 'bulbasaur',
  abilities: [
    {
      ability: {
        name: 'overgrow',
      },
    },
  ],
  base_experience: 64,
  height: 7,
  id: 1,
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
      },
    }
  ],
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  weight: 69,
}

export const POKEMON_LIST = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    }
  ],
}

