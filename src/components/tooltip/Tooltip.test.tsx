// based on https://floating-ui.com/docs/react#testing
import { describe, test, expect } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'

import Tooltip from './Tooltip'

const waitForPosition = () => act(async () => {})

const TOOLTIP_CONTENT = 'Test'
const TOOLTIP_TRIGGER = 'Trigger'

describe('Tooltip', () => {
  test('Tooltip renders correctly', () => {
    render(
      <Tooltip content={TOOLTIP_CONTENT}>
        {TOOLTIP_TRIGGER}
      </Tooltip>
    )

    const trigger = screen.getByText(TOOLTIP_TRIGGER)
    const tooltip = screen.queryByRole('tooltip')

    expect(trigger).toBeInTheDocument()
    expect(tooltip).not.toBeInTheDocument()
  })

  test('Tooltip renders with tooltip content', async () => {
    render(
      <Tooltip content={TOOLTIP_CONTENT}>
        {TOOLTIP_TRIGGER}
      </Tooltip>
    )

    const trigger = screen.getByText(TOOLTIP_TRIGGER)

    fireEvent.mouseEnter(trigger)

    await waitForPosition()

    const tooltip = screen.queryByRole('tooltip')

    expect(trigger).toBeInTheDocument()
    expect(tooltip).toBeInTheDocument()
  })
})
