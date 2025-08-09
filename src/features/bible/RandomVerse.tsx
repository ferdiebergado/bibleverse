import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useLoaderData } from 'react-router'
import type { randomVerseLoader } from './randomVerse'

export default function RandomVerse() {
    const { verse, text, book, chapter } =
        useLoaderData<Awaited<ReturnType<typeof randomVerseLoader>>>()

    return (
        <Card className="mx-8 mt-8 w-full max-w-lg px-4 py-3">
            <CardTitle className="px-4 py-3 text-3xl">Random Verse</CardTitle>
            <CardContent>
                <p className="text-justify italic">{text}</p>
                <p className="my-2 text-right text-2xl font-bold">{`${book} ${chapter.toString()}:${verse.toString()}`}</p>
            </CardContent>
        </Card>
    )
}
