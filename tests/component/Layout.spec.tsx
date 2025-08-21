import type { Result } from '@/features/randomVerse'
import Router from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { afterAll, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'

const mockVerse = {
    verse: 16,
    book_id: 'jhn',
    book: 'john',
    chapter: 3,
    text: 'for god so love the world',
}

const mockResult: Partial<Result> = {
    random_verse: mockVerse,
}

const mockResponse: Partial<Response> = {
    ok: true,
    json: () => Promise.resolve(mockResult),
}

vi.stubGlobal(
    'fetch',
    vi.fn(() => Promise.resolve(mockResponse))
)

afterAll(() => vi.unstubAllGlobals())

it('renders the layout', async () => {
    const queryClient = new QueryClient()

    const { getByRole, getByText, getByPlaceholder } = render(
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    )

    const nav = getByRole('navigation')
    await expect.element(nav).toBeVisible()

    const main = getByRole('main')
    expect(main).toBeInTheDocument()

    const randomVerse = getByText('for god so love the world')
    await expect.element(randomVerse).toBeVisible()

    const searchVerse = getByText('Verse Search')
    expect(searchVerse).toBeVisible()

    const verse = getByText(/john 3:16/i)
    expect(verse).toBeVisible()

    const searchPlaceholder = getByPlaceholder(/john 3:16/i)
    expect(searchPlaceholder).toBeVisible()

    const footer = getByText(/2025 by ferdie bergado/i)
    expect(footer).toBeVisible()
})
