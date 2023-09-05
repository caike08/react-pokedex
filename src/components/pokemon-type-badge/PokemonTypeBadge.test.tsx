import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { POKEMON_TYPES, POKEMON_TYPE_BADGES } from '../../constants/pokemon-types.const'
import errorImage from '../../assets/error.svg'

import PokemonTypeBadge from './PokemonTypeBadge'

const POKEMON_TYPE_BADGE = POKEMON_TYPES.GRASS

describe('PokemonTypeBadge', () => {
  test('PokemonTypeBadge renders correctly', () => {
    render(<PokemonTypeBadge badge={POKEMON_TYPE_BADGE} />)

    // since I know I'm rendering an image
    const badge = screen.getByAltText(POKEMON_TYPE_BADGE) as HTMLImageElement

    expect(badge.src).toBe(POKEMON_TYPE_BADGES[POKEMON_TYPE_BADGE])
  })

  test('PokemonTypeBadge renders with error image', () => {
    render(<PokemonTypeBadge badge={POKEMON_TYPE_BADGE} />)

    fireEvent.error(screen.getByAltText(POKEMON_TYPE_BADGE))

    // since I know I'm rendering an image
    const badge = screen.getByAltText(POKEMON_TYPE_BADGE) as HTMLImageElement

    expect(badge.src).toContain(errorImage)
  })
})
