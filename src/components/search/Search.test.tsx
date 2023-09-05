import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import Search from './Search'

const PLACEHOLDER = 'This is a placeholder'

describe('Search', () => {
  test('Search renders correctly', () => {
    const onChange = vi.fn()
    render(<Search onChange={onChange} />)

    const input = screen.getByRole('searchbox')

    expect(input).toBeInTheDocument()
  })

  test('Search renders with placeholder', () => {
    const onChange = vi.fn()
    render(<Search onChange={onChange} placeholder={PLACEHOLDER} />)
    
    // since I know I'm rendering an input
    const input = screen.getByRole('searchbox') as HTMLInputElement

    expect(input.placeholder).toBe(PLACEHOLDER)
  })

  test('Search changes its value', () => {
    const onChange = vi.fn()
    render(<Search onChange={onChange} />)

    // since I know I'm rendering an input
    const input = screen.getByRole('searchbox') as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value: 'test'
      }
    })

    expect(onChange).toHaveBeenCalled()
    expect(input.value).toBe('test')

    fireEvent.change(input, {
      target: {
        value: ''
      }
    })

    expect(onChange).toHaveBeenCalled()
    expect(input.value).toBe('')
  })
})
