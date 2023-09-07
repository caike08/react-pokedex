// based on https://levelup.gitconnected.com/testing-a-custom-react-hook-21ae732228b7
import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { POKEMON_DETAILS } from '../../constants/pokemon-mock.const'

import useFetch from './use-fetch'

type PokemonDataMock = {name: string, url: string}

const WRONG_URL = 'https://pokeapi.co/api/v2/pokemon/0/'
const URL = 'https://pokeapi.co/api/v2/pokemon/1/'

const ERROR_MESSAGE = 'Something went wrong'

describe('useFetch', () => {
  test.todo('should throw an error', async () => {
    const { result } = renderHook(() => useFetch<PokemonDataMock>(WRONG_URL))

    await waitFor(() => expect(result.current.error).toBe(ERROR_MESSAGE))
  })

  test('should return data', async () => {
    const { result } = renderHook(() => useFetch<PokemonDataMock>(URL))

    await waitFor(() => expect(result.current.data).toStrictEqual(POKEMON_DETAILS))
  })
})
