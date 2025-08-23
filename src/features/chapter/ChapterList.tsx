import NoResult from '@/components/NoResult'
import { Search } from '@/components/Search'
import { type Chapter as ChapterType } from '@/features/chapter'
import Chapter from '@/features/chapter/Chapter'
import { useState, type FC } from 'react'

interface ChapterListProps {
    chapters: ChapterType[]
}

const ChapterList: FC<ChapterListProps> = ({ chapters }) => {
    const [filteredChapters, setFilteredChapters] = useState(chapters)

    const handleSearch = (searchTerm: string): void => {
        const newFilteredChapters = chapters.filter(({ chapter }) =>
            chapter.toString().includes(searchTerm)
        )
        setFilteredChapters(newFilteredChapters)
    }

    const handleClear = (): void => {
        setFilteredChapters(chapters)
    }

    return (
        <>
            <Search
                placeHolder="Search chapters..."
                onSearch={handleSearch}
                onClear={handleClear}
            />

            <div className="flex flex-wrap space-y-4 space-x-4">
                {filteredChapters.length === 0 ? (
                    <NoResult />
                ) : (
                    filteredChapters.map(({ chapter, book_id }) => (
                        <Chapter
                            bookId={book_id}
                            chapter={chapter}
                            key={chapter}
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default ChapterList
