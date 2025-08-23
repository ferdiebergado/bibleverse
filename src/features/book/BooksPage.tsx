import CardMain from '@/components/CardMain'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useBooksQuery } from '@/features/book'
import BookList from '@/features/book/BookList'
import { type FC } from 'react'

const BooksPage: FC = () => {
    const { data: books } = useBooksQuery()

    return (
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">Books</CardTitle>
            </CardHeader>
            <CardContent>
                <BookList books={books} />
            </CardContent>
        </CardMain>
    )
}

export default BooksPage
