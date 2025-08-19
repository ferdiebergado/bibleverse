import { type FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Books from './features/book/Books'
import Chapters from './features/chapter/Chapters'
import Verses from './features/verse/Verses'
import Home from './Home'

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
