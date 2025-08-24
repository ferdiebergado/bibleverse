import { Search } from '@/components/Search'
import { useBooks } from '@/features/book'
import BookList from '@/features/book/BookList'
import { useState, type FC } from 'react'

const Books: FC = () => {
    const { data: books } = useBooks()

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

            <BookList books={filteredBooks} />
        </>
    )
}

export default Books
