import { beforeEach, describe, expect, test, vi } from "vitest"
import { renderHook } from '@testing-library/react'
import useNetwork from "./use-network";

describe('useNetwork', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  test('should be online',  () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(true)
    const { result } = renderHook(() => useNetwork())

    expect(result.current).toBe(true)
  })

  test('should be offline',  () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false)
    const { result } = renderHook(() => useNetwork())

    expect(result.current).toBe(false)
  })
})
