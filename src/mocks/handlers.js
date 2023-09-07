// based on https://relatablecode.com/testing-a-react-application-integrating-msw-with-vitest
import { rest } from 'msw'

import { BASE_POKEAPI_URL } from '../constants/pokeapi.const'
import { POKEMON_DETAILS, POKEMON_LIST } from '../constants/pokemon-mock.const'

const POKEMON_DETAILS_URL = `${BASE_POKEAPI_URL}/pokemon/1/`
const POKEMON_LIST_URL = `${BASE_POKEAPI_URL}/pokemon`
const POKEMON_ERROR_URL = `${BASE_POKEAPI_URL}/pokemon/0/`

const ERROR_MESSAGE = 'Something went wrong'

const handlers = [
  rest.get(POKEMON_LIST_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(POKEMON_LIST)
    )
  }),
  rest.get(POKEMON_DETAILS_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(POKEMON_DETAILS)
    )
  }),
  rest.get(POKEMON_ERROR_URL, (req, res, ctx) => {
    return res(
      ctx.status(401),
      ctx.json({error: ERROR_MESSAGE})
    )
  })
]

export default handlers
