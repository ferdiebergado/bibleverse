import { defaultURL } from '@/lib/api'
import type { Translation } from '@/lib/types'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

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

export function versesQuery(bookId: string, chapter: string) {
    return queryOptions({
        queryKey: ['verses', bookId, chapter],
        queryFn: () => fetchVerses(bookId, chapter),
    })
}

export interface VersesRouteParams extends Record<string, string | undefined> {
    bookId?: string
    chapter?: string
}

export function useVersesQuery(bookId?: string, chapter?: string) {
    if (!bookId || !chapter) throw new Error('bookId/chapter is required')

    return useSuspenseQuery(versesQuery(bookId, chapter))
}
