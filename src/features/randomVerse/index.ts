import type { Verse } from '@/features/verse'
import { defaultURL } from '@/lib/api'
import type { Translation } from '@/lib/types'
import { queryOptions, useQuery } from '@tanstack/react-query'

export interface Result {
    translation: Translation
    random_verse: Verse
}

async function fetchRandomVerse(): Promise<Verse> {
    const res = await fetch(`${defaultURL}/random`)
    if (!res.ok) {
        throw new Error(res.statusText)
    }

    const { random_verse } = (await res.json()) as Result
    return random_verse
}

export const randomVerseQuery = queryOptions({
    queryKey: ['random'],
    queryFn: fetchRandomVerse,
    staleTime: 0,
})

export function useRandomVerseQuery() {
    return useQuery(randomVerseQuery)
}
