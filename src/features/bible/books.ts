import { QueryClient, queryOptions } from '@tanstack/react-query'
import { defaultURL } from './api'
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
    const res = await fetch(defaultURL)
    if (!res.ok) {
        throw new Error(res.statusText)
    }

    const { books } = (await res.json()) as Payload

    return books
}

const booksQuery = queryOptions({
    queryKey: ['books'],
    queryFn: fetchBooks,
})

export async function booksLoader(queryClient: QueryClient) {
    return await queryClient.ensureQueryData(booksQuery)
}
