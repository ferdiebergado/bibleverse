import { QueryClient, queryOptions } from '@tanstack/react-query'
import type { LoaderFunctionArgs } from 'react-router'
import type { Translation } from './translation'

export interface Verse {
    book_id: string
    book: string
    chapter: number
    verse: number
    text: string
}

interface Payload {
    translation: Translation
    verses: Verse[]
}

function fetchVerses(bookId: string, chapter: string) {
    return async function (): Promise<Verse[]> {
        try {
            const res = await fetch(
                `https://bible-api.com/data/web/${bookId}/${chapter}`
            )
            if (!res.ok) {
                throw new Error(res.statusText)
            }

            const { verses } = (await res.json()) as Payload

            return verses
        } catch (error) {
            console.error(error)

            throw error
        }
    }
}

function versesQuery(bookId: string, chapter: string) {
    return queryOptions({
        queryKey: ['verses', bookId],
        queryFn: fetchVerses(bookId, chapter),
    })
}

interface VersesRouteParams extends Record<string, string> {
    bookId: string
    chapter: string
}

export function versesLoader(queryClient: QueryClient) {
    return async function ({ params }: LoaderFunctionArgs) {
        const { bookId, chapter } = params as VersesRouteParams
        return await queryClient.ensureQueryData(versesQuery(bookId, chapter))
    }
}
