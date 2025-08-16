import type { Verse } from '@/features/verse'
import { api } from '@/lib/api'
import { queryOptions, useQuery } from '@tanstack/react-query'

export interface SearchResult {
    reference: string
    verses: Verse[]
    text: string
    translation_id: string
    translation_name: string
    translation_note: string
}

async function searchVerses(verse: string): Promise<Verse[]> {
    if (!verse) return Promise.resolve([])

    const res = await fetch(`${api}/${encodeURIComponent(verse)}`)
    if (!res.ok) {
        throw new Error(res.statusText)
    }

    const { verses } = (await res.json()) as SearchResult
    return verses
}

function searchVerseQuery(verse: string) {
    return queryOptions({
        queryKey: ['search', verse],
        queryFn: () => searchVerses(verse),
        retry: false,
    })
}

export function useSearchVerseQuery(verse: string) {
    return useQuery(searchVerseQuery(verse))
}
