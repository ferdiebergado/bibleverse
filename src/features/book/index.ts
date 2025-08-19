import { defaultURL } from '@/lib/api'
import type { Translation } from '@/lib/types'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

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

export const booksQuery = queryOptions({
    queryKey: ['books'],
    queryFn: fetchBooks,
})

export function useBooksQuery() {
    return useSuspenseQuery(booksQuery)
}
