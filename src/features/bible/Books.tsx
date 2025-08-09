import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { useLoaderData } from 'react-router'
import Book from './Book'
import { booksLoader } from './books'

export default function Books() {
    const books = useLoaderData<Awaited<ReturnType<typeof booksLoader>>>()
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
        <Card className="m-8 p-12">
            <CardTitle className="text-3xl">Books</CardTitle>

            <CardAction>
                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input
                        type="search"
                        placeholder="Search for a book"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <Button
                        type="button"
                        variant="outline"
                        onClick={searchBooks}
                    >
                        Search
                    </Button>
                </div>
            </CardAction>

            <CardContent className="flex flex-wrap gap-3">
                {filteredBooks.length === 0
                    ? 'No records found.'
                    : filteredBooks.map(({ id, name }) => (
                          <Book id={id} name={name} key={id} />
                      ))}
            </CardContent>
        </Card>
    )
}
