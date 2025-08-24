import NoResult from '@/components/NoResult'
import { type Chapter as ChapterType } from '@/features/chapter'
import Chapter from '@/features/chapter/Chapter'
import { type FC } from 'react'

interface ChaptersProps {
    chapters: ChapterType[]
}

const ChapterList: FC<ChaptersProps> = ({ chapters }) => {
    return (
        <div className="flex flex-wrap space-y-4 space-x-4">
            {chapters.length === 0 ? (
                <NoResult />
            ) : (
                chapters.map(({ chapter, book_id }) => (
                    <Chapter bookId={book_id} chapter={chapter} key={chapter} />
                ))
            )}
        </div>
    )
}

export default ChapterList
