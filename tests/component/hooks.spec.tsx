import { useDebouncedEffect } from '@/lib/hooks'
import { act, type DependencyList } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderHook } from 'vitest-browser-react'

describe('useDebouncedEffect', () => {
    vi.useFakeTimers()

    it('should not run the effect immediately', () => {
        const effect = vi.fn()
        renderHook(() => {
            useDebouncedEffect(effect, 500, [])
        })

        expect(effect).not.toHaveBeenCalled()
    })

    it('should run the effect after the specified delay', () => {
        const effect = vi.fn()
        const delay = 500
        renderHook(() => {
            useDebouncedEffect(effect, delay, [])
        })

        act(() => {
            vi.advanceTimersByTime(delay - 1)
        })
        expect(effect).not.toHaveBeenCalled()

        act(() => {
            vi.advanceTimersByTime(1)
        })
        expect(effect).toHaveBeenCalledTimes(1)
    })

    it('should debounce the effect when dependencies change rapidly', () => {
        const effect = vi.fn()
        const delay = 500

        interface HookProps {
            deps: DependencyList
        }
        const { rerender } = renderHook<HookProps, unknown>(
            ({ deps } = { deps: [] }) => {
                useDebouncedEffect(effect, delay, deps)
            },
            {
                initialProps: { deps: [1] } as HookProps,
            }
        )

        rerender({ deps: [2] })
        act(() => {
            vi.advanceTimersByTime(delay / 2)
        })

        rerender({ deps: [3] })
        act(() => {
            vi.advanceTimersByTime(delay / 2)
        })

        expect(effect).not.toHaveBeenCalled()

        act(() => {
            vi.advanceTimersByTime(delay / 2)
        })

        expect(effect).toHaveBeenCalledTimes(1)
    })

    it('should clear the timer on unmount', () => {
        const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout')
        const effect = vi.fn()
        const delay = 500
        const { unmount } = renderHook(() => {
            useDebouncedEffect(effect, delay, [])
        })

        expect(effect).not.toHaveBeenCalled()

        act(() => {
            unmount()
        })

        expect(clearTimeoutSpy).toHaveBeenCalled()
        expect(effect).not.toHaveBeenCalled()
    })
})
