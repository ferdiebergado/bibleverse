import type { RouteObject } from 'react-router'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import queryClient from './lib/queryClient'

export const routes: RouteObject[] = [
    {
        path: '/',
        Component: Layout,
        ErrorBoundary: ErrorBoundary,
        children: [
            {
                index: true,
                lazy: async () => {
                    const [{ default: Books }, { booksLoader }] =
                        await Promise.all([
                            import('./features/bible/Books'),
                            import('./features/bible/books'),
                        ])
                    return {
                        Component: Books,
                        loader: booksLoader(queryClient),
                    }
                },
            },
            {
                path: ':bookId/chapters',
                lazy: async () => {
                    const [{ default: Chapters }, { chaptersLoader }] =
                        await Promise.all([
                            import('./features/bible/Chapters'),
                            import('./features/bible/chapters'),
                        ])
                    return {
                        Component: Chapters,
                        loader: chaptersLoader(queryClient),
                    }
                },
            },
            {
                path: ':bookId/chapters/:chapter',
                lazy: async () => {
                    const [{ default: Verses }, { versesLoader }] =
                        await Promise.all([
                            import('./features/bible/Verses'),
                            import('./features/bible/verses'),
                        ])
                    return {
                        Component: Verses,
                        loader: versesLoader(queryClient),
                    }
                },
            },
        ],
    },
    {
        path: '*',
        Component: NotFound,
    },
]
