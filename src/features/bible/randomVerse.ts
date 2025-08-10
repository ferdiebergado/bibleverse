import { QueryClient, queryOptions } from '@tanstack/react-query'
import { defaultURL } from './api'
import type { Translation } from './translation'
import type { Verse } from './verses'

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

const randomVerseQuery = queryOptions({
    queryKey: ['random'],
    queryFn: fetchRandomVerse,
    staleTime: 0,
})

export async function randomVerseLoader(queryClient: QueryClient) {
    return await queryClient.ensureQueryData(randomVerseQuery)
}
