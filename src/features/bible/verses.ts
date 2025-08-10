import { QueryClient, queryOptions } from '@tanstack/react-query'
import { type LoaderFunctionArgs } from 'react-router'
import { defaultURL } from './api'
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

async function fetchVerses(bookId: string, chapter: string): Promise<Verse[]> {
    const res = await fetch(`${defaultURL}/${bookId}/${chapter}`)
    if (!res.ok) {
        throw new Error(res.statusText)
    }

    const { verses } = (await res.json()) as Payload

    return verses
}

function versesQuery(bookId: string, chapter: string) {
    return queryOptions({
        queryKey: ['verses', bookId, chapter],
        queryFn: () => fetchVerses(bookId, chapter),
    })
}

interface VersesRouteParams extends Record<string, string | undefined> {
    bookId?: string
    chapter?: string
}

export function versesLoader(queryClient: QueryClient) {
    return async function ({ params }: LoaderFunctionArgs) {
        const { bookId, chapter } = params as VersesRouteParams
        if (!bookId || !chapter) throw new Error('bookId/chapter is required')

        return await queryClient.ensureQueryData(versesQuery(bookId, chapter))
    }
}
