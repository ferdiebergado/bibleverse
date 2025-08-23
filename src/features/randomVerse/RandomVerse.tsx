import ErrorMessage from '@/components/ErrorMessage'
import type { FC } from 'react'
import { useRandomVerseQuery } from '.'
import RandomVerseSkeleton from './Skeleton'

const RandomVerse: FC = () => {
    const { isPending, isError, error, data } = useRandomVerseQuery()

    if (isPending) return <RandomVerseSkeleton />

    if (isError) return <ErrorMessage message={error.message} />

    const { text, book, chapter, verse } = data

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

export default RandomVerse
