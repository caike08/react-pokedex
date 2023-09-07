import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'

import App from './App'

const TITLE = 'Pokédex (Kanto - カントー地方)'
const LOADING_ALT = 'pokeball loading'
const EMPTY_SEARCH_TEXT = 'No pokémon found :('

const waitForData = () => act(async () => {})

describe('App', () => {
  test('Renders App with Loading then data', async () => {
    render(<App />)

    expect(screen.getByAltText(LOADING_ALT)).toBeDefined()

    await waitForData()

    expect(screen.getByText(TITLE)).toBeInTheDocument()
    expect(screen.getByAltText('bulbasaur')).toBeInTheDocument()
  })

  test('Search for pokemon', async () => {
    render(<App />)

    await waitForData()

    const input = screen.getByRole('searchbox')

    input.focus()

    await userEvent.keyboard('bulbasaur')

    // expect(input).toHaveValue('bulbasaur')
    expect(screen.getByAltText('bulbasaur')).toBeInTheDocument()

    input.focus()

    await userEvent.type(input, 'pikachu')
    
    expect(screen.getByText(EMPTY_SEARCH_TEXT)).toBeInTheDocument()
  })
})
