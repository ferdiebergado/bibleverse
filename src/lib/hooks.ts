import { useEffect, useLayoutEffect, useRef } from 'react'

/**
 * A custom hook that debounces an effect, similar to `useEffect` but with a delay.
 * The effect function will only run after a specified `delay` has passed since the last change in `deps`.
 * This is useful for performance optimization in scenarios like user input validation or window resizing.
 *
 * @param effect The function to be debounced. This function is the same as the one passed to `useEffect`.
 * @param delay The debounce delay in milliseconds.
 * @param deps An array of dependencies. The effect will re-run whenever a value in this array changes.
 */
export function useDebouncedEffect(
    effect: () => void,
    delay: number,
    deps: React.DependencyList
): void {
    const callback = useRef(effect)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Update the callback function on each render to ensure we have the latest `effect`
    useLayoutEffect(() => {
        callback.current = effect
    })

    useEffect(() => {
        // Clear any existing timer to debounce the effect
        if (timer.current) {
            clearTimeout(timer.current)
        }

        // Set a new timer
        timer.current = setTimeout(() => {
            callback.current()
        }, delay)

        // Cleanup function to clear the timer if the component unmounts or dependencies change
        return () => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps, delay])
}
