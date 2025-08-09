import { QueryClient, queryOptions } from '@tanstack/react-query'
import type { Translation } from './translation'

export interface Book {
    id: string
    name: string
    url: string
}

interface Payload {
    translation: Translation
    books: Book[]
}

async function fetchBooks(): Promise<Book[]> {
    try {
        const res = await fetch('https://bible-api.com/data/web')
        if (!res.ok) {
            throw new Error(res.statusText)
        }

        const { books } = (await res.json()) as Payload

        return books
    } catch (error) {
        console.error(error)

        throw error
    }
}

export const BooksQuery = queryOptions({
    queryKey: ['books'],
    queryFn: fetchBooks,
})

export function booksLoader(queryClient: QueryClient) {
    return async function () {
        return await queryClient.ensureQueryData(BooksQuery)
    }
}
