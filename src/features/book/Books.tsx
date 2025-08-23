import CardContentMain from '@/components/CardContentMain'
import CardMain from '@/components/CardMain'
import NoResult from '@/components/NoResult'
import { CardAction, CardHeader, CardTitle } from '@/components/ui/card'
import { useState, type FC } from 'react'
import { useBooksQuery } from '.'
import Book from './Book'
import { Search } from './Search'

const Books: FC = () => {
    const { data: books } = useBooksQuery()
    const [filteredBooks, setFilteredBooks] = useState(books)

    function handleSearch(searchTerm: string) {
        const newFilteredBooks = books.filter((book) =>
            book.name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
        )
        setFilteredBooks(newFilteredBooks)
    }

    function handleClear() {
        setFilteredBooks(books)
    }

    return (
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">Books</CardTitle>
                <CardAction>
                    <Search
                        placeHolder="Search books..."
                        onSearch={handleSearch}
                        onClear={handleClear}
                    />
                </CardAction>
            </CardHeader>
            <CardContentMain>
                {filteredBooks.length === 0 ? (
                    <NoResult />
                ) : (
                    filteredBooks.map(({ id, name }) => (
                        <Book id={id} name={name} key={id} />
                    ))
                )}
            </CardContentMain>
        </CardMain>
    )
}

export default Books
