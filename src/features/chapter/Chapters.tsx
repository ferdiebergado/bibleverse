import CardContentMain from '@/components/CardContentMain'
import CardMain from '@/components/CardMain'
import NoResult from '@/components/NoResult'
import { CardAction, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from '@/features/book/Search'
import { useChaptersQuery, type ChaptersRouteParams } from '@/features/chapter'
import Chapter from '@/features/chapter/Chapter'
import { useState, type FC } from 'react'
import { useParams } from 'react-router'

const Chapters: FC = () => {
    const { bookId } = useParams<ChaptersRouteParams>()
    const { data: chapters } = useChaptersQuery(bookId)
    const { book: currentBook } = chapters[0]
    const [filteredChapters, setFilteredChapters] = useState(chapters)

    function handleSearch(searchTerm: string): void {
        const newFilteredChapters = chapters.filter(
            ({ chapter }) =>
                chapter.toString().toLocaleLowerCase() ==
                searchTerm.toLocaleLowerCase()
        )
        setFilteredChapters(newFilteredChapters)
    }

    function handleClear(): void {
        setFilteredChapters(chapters)
    }

    return (
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">{currentBook}</CardTitle>
                <CardAction>
                    <Search
                        placeHolder="Search chapters..."
                        onSearch={handleSearch}
                        onClear={handleClear}
                    />
                </CardAction>
            </CardHeader>

            <CardContentMain>
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
            </CardContentMain>
        </CardMain>
    )
}

export default Chapters
