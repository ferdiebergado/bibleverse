import { lazy, type FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'

const Home = lazy(() => import('@/Home'))
const BooksPage = lazy(() => import('@/features/book/BooksPage'))
const ChaptersPage = lazy(() => import('@/features/chapter/ChaptersPage'))
const VersesPage = lazy(() => import('@/features/verse/VersesPage'))
const NotFound = lazy(() => import('@/components/NotFound'))

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="books">
                        <Route index element={<BooksPage />} />
                        <Route path=":bookId" element={<ChaptersPage />} />
                        <Route
                            path=":bookId/:chapter"
                            element={<VersesPage />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
