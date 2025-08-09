import { QueryClient, queryOptions } from '@tanstack/react-query'
import type { LoaderFunctionArgs } from 'react-router'
import type { Translation } from './translation'

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

function fetchChapters(bookId: string) {
    return async function (): Promise<Chapter[]> {
        try {
            const res = await fetch('https://bible-api.com/data/web/' + bookId)
            if (!res.ok) {
                throw new Error(res.statusText)
            }

            const { chapters } = (await res.json()) as Payload

            return chapters
        } catch (error) {
            console.error(error)

            throw error
        }
    }
}

function ChaptersQuery(bookId: string) {
    return queryOptions({
        queryKey: ['chapters', bookId],
        queryFn: fetchChapters(bookId),
    })
}

interface ChapterRouteParams extends Record<string, string> {
    bookId: string
}

export function chaptersLoader(queryClient: QueryClient) {
    return async function ({ params }: LoaderFunctionArgs) {
        const { bookId } = params as ChapterRouteParams
        return await queryClient.ensureQueryData(ChaptersQuery(bookId))
    }
}
