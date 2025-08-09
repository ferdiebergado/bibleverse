import { Home } from 'lucide-react'
import { lazy } from 'react'
import type { RouteObject } from 'react-router'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import { booksLoader } from './features/bible/books'
import { chaptersLoader } from './features/bible/chapters'
import queryClient from './lib/queryClient'

export const routes: RouteObject[] = [
    {
        path: '/',
        Component: Layout,
        ErrorBoundary: ErrorBoundary,
        children: [
            { index: true, Component: Home },
            {
                path: 'books',
                children: [
                    {
                        index: true,
                        Component: lazy(() => import('./features/bible/Books')),
                        loader: booksLoader(queryClient),
                    },
                    {
                        path: ':bookId/chapters',
                        Component: lazy(
                            () => import('./features/bible/Chapters')
                        ),
                        loader: chaptersLoader(queryClient),
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        Component: NotFound,
    },
]
