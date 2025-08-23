import NoResult from '@/components/NoResult'
import { Search } from '@/components/Search'
import type { Book as BookType } from '@/features/book'
import Book from '@/features/book/Book'
import { useState, type FC } from 'react'

interface BookSearchProps {
    books: BookType[]
}

const BookList: FC<BookSearchProps> = ({ books }) => {
    const [filteredBooks, setFilteredBooks] = useState(books)

    const handleSearch = (searchTerm: string): void => {
        const newFilteredBooks = books.filter((book) =>
            book.name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
        )
        setFilteredBooks(newFilteredBooks)
    }

    const handleClear = (): void => {
        setFilteredBooks(books)
    }

    return (
        <>
            <Search
                placeHolder="Search books..."
                onSearch={handleSearch}
                onClear={handleClear}
            />

            <div className="flex flex-wrap space-y-4 space-x-4">
                {filteredBooks.length === 0 ? (
                    <NoResult />
                ) : (
                    filteredBooks.map(({ id, name }) => (
                        <Book id={id} name={name} key={id} />
                    ))
                )}
            </div>
        </>
    )
}

export default BookList
