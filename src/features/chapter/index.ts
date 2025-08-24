import { defaultURL } from '@/lib/api'
import type { Translation } from '@/lib/types'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export interface Chapter {
    book_id: string
    book: string
    chapter: number
    url: string
}

interface Payload {
    translation: Translation
    chapters: Chapter[]
}

async function fetchChapters(bookId: string): Promise<Chapter[]> {
    const res = await fetch(`${defaultURL}/${bookId}`)
    if (!res.ok) {
        throw new Error(res.statusText)
    }

    const { chapters } = (await res.json()) as Payload

    return chapters
}

export function chaptersQuery(bookId: string) {
    return queryOptions({
        queryKey: ['chapters', bookId],
        queryFn: () => fetchChapters(bookId),
    })
}

export interface ChaptersRouteParams
    extends Record<string, string | undefined> {
    bookId?: string
}

export function useChapters(bookId?: string) {
    if (!bookId) throw new Error('bookId is required')

    return useSuspenseQuery(chaptersQuery(bookId))
}
