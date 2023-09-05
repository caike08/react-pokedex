// based on https://levelup.gitconnected.com/testing-a-custom-react-hook-21ae732228b7
import { afterAll, describe, test, vi } from 'vitest'
// import { renderHook } from '@testing-library/react'
// import useFetch from './use-fetch'

// type PokemonDataMock = {name: string, url: string}

// const URL = 'https://pokeapi.co/api/v2/pokemon/1/'

// const POKEMON_DATA = {
//   name: 'bulbasaur',
//   url: URL,
// }

describe('useFetch', () => {
  afterAll(() => {
    vi.resetAllMocks()
  })

  test.todo('should throw an error', () => {
    // global.fetch = vi.fn().mockRejectedValue({
    //   json: vi.fn().mockRejectedValue('something failed')
    // })

    // const { result } = renderHook(() => useFetch<PokemonDataMock>(URL))

    // expect(result.current.error).toBe('something failed')
  })

  test.todo('should return data', () => {
    // global.fetch = vi.fn().mockReturnValue({
    //   json: vi.fn().mockRejectedValue(POKEMON_DATA)
    // })

    // const { result } = renderHook(() => useFetch<PokemonDataMock>(URL))

    // expect(result.current.data).toBe(POKEMON_DATA)
  })
})
