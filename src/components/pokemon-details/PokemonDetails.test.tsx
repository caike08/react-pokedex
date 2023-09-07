import { describe , expect, test } from 'vitest'
import { render, screen, act } from '@testing-library/react'

import { POKEMON_LIST } from '../../constants/pokemon-mock.const'

import PokemonDetails from './PokemonDetails'

const POKEMON_DATA = POKEMON_LIST.results[0]

const waitForData = () => act(async () => {})

describe('PokemonDetails', () => {
  test('PokemonDetails renders correctly', async () => {
    render(<PokemonDetails name={POKEMON_DATA.name} url={POKEMON_DATA.url} />)

    await waitForData()

    expect(screen.getByText(POKEMON_DATA.name)).toBeInTheDocument()
  })
})
