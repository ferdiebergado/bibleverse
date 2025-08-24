import NoResult from '@/components/NoResult'
import type { Book as BookType } from '@/features/book'
import Book from '@/features/book/Book'
import { type FC } from 'react'

interface BookSearchProps {
    books: BookType[]
}

const BookList: FC<BookSearchProps> = ({ books }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {books.length === 0 ? (
                <NoResult />
            ) : (
                books.map(({ id, name }) => (
                    <Book id={id} name={name} key={id} />
                ))
            )}
        </div>
    )
}

export default BookList
