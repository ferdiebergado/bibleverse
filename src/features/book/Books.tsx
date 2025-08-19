import { Button } from '@/components/ui/button'
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { useBooksQuery } from '.'
import Book from './Book'

export default function Books() {
    const { data: books } = useBooksQuery()
    const [filteredBooks, setFilteredBooks] = useState(books)
    const [search, setSearch] = useState('')

    function searchBooks() {
        if (search === '') {
            setFilteredBooks(books)
            return
        }

        const filteredBooks = books.filter((book) =>
            book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        setFilteredBooks(filteredBooks)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const searchTerm = e.target.value
        if (searchTerm === '') {
            setFilteredBooks(books)
            return
        }

        setSearch(searchTerm)
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key == 'Enter') searchBooks()
    }

    return (
        <Card className="m-4 p-6 shadow-md md:m-8 md:p-12">
            <CardHeader>
                <CardTitle className="text-3xl">Books</CardTitle>

                <CardAction>
                    <div className="flex w-full max-w-sm items-center gap-2">
                        <Input
                            type="search"
                            placeholder="Search for a book"
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        <Button type="button" onClick={searchBooks}>
                            Search
                        </Button>
                    </div>
                </CardAction>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-3 px-0">
                {filteredBooks.length === 0
                    ? 'No records found.'
                    : filteredBooks.map(({ id, name }) => (
                          <Book id={id} name={name} key={id} />
                      ))}
            </CardContent>
        </Card>
    )
}
