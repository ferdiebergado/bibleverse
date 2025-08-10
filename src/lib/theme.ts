import { createContext, use } from 'react'

export type Theme = 'dark' | 'light' | 'system'

export interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

export interface ThemeProviderState {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null,
}

export const ThemeProviderContext =
    createContext<ThemeProviderState>(initialState)

export function useTheme() {
    const context = use(ThemeProviderContext)

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (context === undefined)
        throw new Error('useTheme must be used within a ThemeProvider')

    return context
}
