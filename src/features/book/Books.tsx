import NoResult from '@/components/NoResult'
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
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
        <Card className="m-4 p-6 shadow-md md:m-8 md:p-12">
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
            <CardContent className="flex flex-wrap gap-3 px-0">
                {filteredBooks.length === 0 ? (
                    <NoResult />
                ) : (
                    filteredBooks.map(({ id, name }) => (
                        <Book id={id} name={name} key={id} />
                    ))
                )}
            </CardContent>
        </Card>
    )
}

export default Books
