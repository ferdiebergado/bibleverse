import {
    type Theme,
    ThemeProviderContext,
    type ThemeProviderProps,
} from '@/lib/theme'
import { useEffect, useState } from 'react'

export default function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'vite-ui-theme',
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove('light', 'dark')

        if (theme === 'system') {
            const systemTheme = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
                ? 'dark'
                : 'light'

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    // eslint-disable-next-line react-x/no-unstable-context-value
    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        },
    }

    return (
        <ThemeProviderContext {...props} value={value}>
            {children}
        </ThemeProviderContext>
    )
}
