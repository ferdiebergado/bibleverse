import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './components/Home'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import { booksLoader } from './features/bible/books'
import { chaptersLoader } from './features/bible/chapters'

const queryClient = new QueryClient()

const router = createBrowserRouter([
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
])

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default App
