import { queryOptions, useQuery } from '@tanstack/react-query'
import { api } from './api'
import type { Verse } from './verses'

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
    })
}

export function useSearchVerseQuery(verse: string) {
    return useQuery(searchVerseQuery(verse))
}
