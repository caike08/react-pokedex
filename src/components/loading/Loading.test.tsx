import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Loading from './Loading'

const LOADING_SRC = '/src/assets/pokeball.svg'

describe('Loading', () => {
  test('Loading renders correctly', () => {
    render(<Loading />)

    // since I know I'm rendering an image
    const loading = screen.getByAltText('pokeball loading') as HTMLImageElement

    expect(loading.src).toContain(LOADING_SRC)
  }) 
})
