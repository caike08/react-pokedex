import { describe, test } from 'vitest'

import { render } from '@testing-library/react'

import Dialog from './Dialog'

const DialogMock = {
  children: 'trigger',
  content: 'tooltip'
}

describe('Dialog', () => {
  test.todo('Dialog renders correctly', async () => {
		const { debug } = render(<Dialog content={DialogMock.content}>{DialogMock.children}</Dialog>)

    debug()
  })
})
