import { describe, expect, test } from 'vitest'
import { render, screen, act } from '@testing-library/react'

import Card from './Card'

const CARD_MOCK = {
  id: 1,
  name: 'Bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/'
}

const POKEMON_DATA_MOCK = {
  name: 'Bulbasaur',
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  }
}

const waitForData = () => act(async () => {})

describe('Card', () => {
  test('Card renders correctly', async () => {
    render(<Card {...CARD_MOCK} />)

    await waitForData()

    // since I know I'm rendering an image
    const image = screen.getByAltText(CARD_MOCK.name) as HTMLImageElement

    expect(image.src).toContain(POKEMON_DATA_MOCK.sprites.front_default)
    expect(screen.getByText(`#${CARD_MOCK.id} ${CARD_MOCK.name}`)).toBeInTheDocument()
  })
})

