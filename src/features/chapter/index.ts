import { defaultURL } from '@/lib/api'
import type { Translation } from '@/lib/types'
import { QueryClient, queryOptions } from '@tanstack/react-query'
import { type LoaderFunctionArgs } from 'react-router'

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

export function chaptersQuery(bookId?: string) {
    if (!bookId) throw new Error('bookId is required')

    return queryOptions({
        queryKey: ['chapters', bookId],
        queryFn: () => fetchChapters(bookId),
    })
}

export interface ChapterRouteParams extends Record<string, string | undefined> {
    bookId?: string
}

export function chaptersLoader(queryClient: QueryClient) {
    return async function ({ params }: LoaderFunctionArgs) {
        const { bookId } = params as ChapterRouteParams
        return await queryClient.ensureQueryData(chaptersQuery(bookId))
    }
}
