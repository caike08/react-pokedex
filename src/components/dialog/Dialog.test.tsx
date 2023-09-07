import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen, act } from '@testing-library/react'

import Dialog from './Dialog'

const DIALOG_CONTENT = 'Test'
const DIALOG_TRIGGER = 'Trigger'

const waitForPosition = () => act(async () => {})

describe('Dialog', () => {
  test('Dialog renders correctly', async () => {
		render(<Dialog content={DIALOG_CONTENT}>{DIALOG_TRIGGER}</Dialog>)

    const trigger = screen.getByText(DIALOG_TRIGGER)
    const dialog = screen.queryByRole('dialog')

    expect(trigger).toBeInTheDocument()
    expect(dialog).not.toBeInTheDocument()
  })

  test('Dialog renders with dropdown content', async () => {
		render(<Dialog content={DIALOG_CONTENT}>{DIALOG_TRIGGER}</Dialog>)

    const trigger = screen.getByText(DIALOG_TRIGGER)

    fireEvent.click(trigger)

    await waitForPosition()

    const dialog = screen.queryByRole('dialog')

    expect(trigger).toBeInTheDocument()
    expect(dialog).toBeInTheDocument()
  })
})
