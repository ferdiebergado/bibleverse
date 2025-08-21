import { lazy, type FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'

const Home = lazy(() => import('@/Home'))
const Books = lazy(() => import('@/features/book/Books'))
const Chapters = lazy(() => import('@/features/chapter/Chapters'))
const Verses = lazy(() => import('@/features/verse/Verses'))
const NotFound = lazy(() => import('@/components/NotFound'))

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="books">
                        <Route index element={<Books />} />
                        <Route path=":bookId" element={<Chapters />} />
                        <Route path=":bookId/:chapter" element={<Verses />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
