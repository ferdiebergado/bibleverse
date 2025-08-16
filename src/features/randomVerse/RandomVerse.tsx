import { useQuery } from '@tanstack/react-query'
import { useLoaderData } from 'react-router'
import { randomVerseQuery, type randomVerseLoader } from '.'

export default function RandomVerse() {
    const initialData =
        useLoaderData<Awaited<ReturnType<typeof randomVerseLoader>>>()

    const {
        data: { verse, chapter, text, book },
    } = useQuery({
        ...randomVerseQuery,
        initialData,
    })

    return (
        <div className="flex w-full flex-col items-center">
            <blockquote className="max-w-4xl px-16 text-justify text-xl italic">
                {text}
                <footer className="my-4 text-2xl font-bold">
                    {`${book} ${chapter.toString()}:${verse.toString()}`}
                </footer>
            </blockquote>
        </div>
    )
}
