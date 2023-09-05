import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, test } from 'vitest'

// import mockFetch from './mocks/mockFetch.js'

import App from './App'

// const TITLE = 'Pokédex (Kanto - カントー地方)'

describe('App', () => {
  // beforeEach(() => {
  //   vi.spyOn(window, 'fetch').mockImplementation(mockFetch)
  // })

  // afterEach(() => {
  //   vi.restoreAllMocks()
  // })

  test.todo('Renders App with Loading correctly', () => {
    render(<App />)
  })
})
