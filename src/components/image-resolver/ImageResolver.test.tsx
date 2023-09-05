import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import offlineImage from '../../assets/offline.svg'

import ImageResolver from './ImageResolver'

const VALID_IMG_SRC = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

describe('ImageResolver', () => {
  test('ImageResolver renders correctly with VALID_IMG_SRC', () => {
    render(<ImageResolver src={VALID_IMG_SRC} />)
    
    // since I know I'm rendering an image
    const image = screen.getByRole('img') as HTMLImageElement

    expect(image.src).toContain(VALID_IMG_SRC)
  })

  test('ImageResolver renders with offline image', () => {
    const ALT_TEXT = 'This should fail'

    render(<ImageResolver src='' alt={ALT_TEXT} />)

    fireEvent.error(screen.getByAltText(ALT_TEXT))

    // since I know I'm rendering an image
    const image = screen.getByAltText(ALT_TEXT) as HTMLImageElement

    expect(image.src).toContain(offlineImage)
  })
})
