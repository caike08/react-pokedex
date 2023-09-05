// based on https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library
import { BASE_POKEAPI_URL, POKEMON_LIST_URL } from '../constants/pokeapi.const'

const POKEMON_DETAILS_URL = `${BASE_POKEAPI_URL}/pokemon/1/`

const POKEMON_DETAILS = {
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

const POKEMON_LIST = [
  {
    id: 1,
    name: 'bulbasaur',
    url: POKEMON_DETAILS_URL,
  },
]

async function mockFetch(url: string) {
  switch (url) {
      case POKEMON_LIST_URL: {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => POKEMON_LIST,
        })
      }
      case POKEMON_DETAILS_URL: {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => POKEMON_DETAILS,
        })
      }
      default: {
        throw new Error(`Unhandled request: ${url}`)
      }
  }
}

export default mockFetch
