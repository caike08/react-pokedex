import '@testing-library/jest-dom'
import { afterAll, afterEach, beforeAll } from 'vitest'

import { server } from '../mocks/server'

// Enable the mocking in tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
// Clean up once the tests are done.
afterAll(() => server.close())
// Reset any runtime handlers tests may use.
afterEach(() => server.resetHandlers())
