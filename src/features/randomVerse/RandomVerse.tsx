import { useRandomVerse } from '@/features/randomVerse'
import type { FC } from 'react'

const RandomVerse: FC = () => {
    const {
        data: { text, book, chapter, verse },
    } = useRandomVerse()

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
