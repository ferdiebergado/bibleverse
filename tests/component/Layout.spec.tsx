import Layout from '@/components/Layout'
import Home from '@/features/bible/Home'
import type { Verse } from '@/features/bible/verses'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoutesStub } from 'react-router'
import { expect, it } from 'vitest'
import { render } from 'vitest-browser-react'

it('renders the layout', async () => {
    const queryClient = new QueryClient()

    const Stub = createRoutesStub([
        {
            path: '/',
            Component: Layout,
            children: [
                {
                    index: true,
                    Component: Home,
                    loader: (): Verse => ({
                        verse: 16,
                        book_id: 'exo',
                        book: 'john',
                        chapter: 3,
                        text: 'for god so love the world',
                    }),
                },
            ],
        },
    ])

    const { getByRole, getByText, getByPlaceholder } = render(
        <QueryClientProvider client={queryClient}>
            <Stub initialEntries={['/']} />
        </QueryClientProvider>
    )

    const nav = getByRole('navigation')
    await expect.element(nav).toBeVisible()

    const main = getByRole('main')
    expect(main).toBeInTheDocument()

    const randomVerseHeading = getByText('Random Verse')
    expect(randomVerseHeading).toBeVisible()

    const randomVerse = getByText('for god so love the world')
    expect(randomVerse).toBeVisible()

    const searchVerse = getByText('Verse Search')
    expect(searchVerse).toBeVisible()

    const verse = getByText(/john 3:16/i)
    expect(verse).toBeVisible()

    const searchPlaceholder = getByPlaceholder(/john 3:16/i)
    expect(searchPlaceholder).toBeVisible()

    const footer = getByText(/2025 by ferdie bergado/i)
    expect(footer).toBeVisible()
})
