import { useChapters } from '@/features/chapter'
import ChapterList from '@/features/chapter/ChapterList'
import { type FC, useEffect, useState } from 'react'

interface ChaptersProps {
    bookId: string | undefined
    searchTerm: string
}

const Chapters: FC<ChaptersProps> = ({ bookId, searchTerm }) => {
    const { data: chapters } = useChapters(bookId)
    const [filteredChapters, setFilteredChapters] = useState(chapters)

    useEffect(() => {
        const newFilteredChapters = chapters.filter(({ chapter }) =>
            chapter.toString().includes(searchTerm)
        )
        setFilteredChapters(newFilteredChapters)
    }, [chapters, searchTerm])

    return <ChapterList chapters={filteredChapters} />
}

export default Chapters
