import CardContentMain from '@/components/CardContentMain'
import CardMain from '@/components/CardMain'
import NoResult from '@/components/NoResult'
import { CardAction, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from '@/features/book/Search'
import { useState, type FC } from 'react'
import { useParams } from 'react-router'
import { useVersesQuery, type VersesRouteParams } from '.'
import Verse from './Verse'

const Verses: FC = () => {
    const { bookId, chapter } = useParams<VersesRouteParams>()
    const { data: verses } = useVersesQuery(bookId, chapter)
    const { book: currentBook, chapter: currentChapter } = verses[0]
    const [filteredVerses, setFilteredVerses] = useState(verses)

    const handleSearch = (searchTerm: string) => {
        const filteredVerses = verses.filter(({ text }) =>
            text.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
        setFilteredVerses(filteredVerses)
    }

    const handleClear = () => {
        setFilteredVerses(verses)
    }

    return (
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">
                    {currentBook} Chapter {currentChapter}
                </CardTitle>
                <CardAction className="flex w-full max-w-sm items-center gap-2">
                    <Search
                        placeHolder="Search verses..."
                        onSearch={handleSearch}
                        onClear={handleClear}
                    />
                </CardAction>
            </CardHeader>
            <CardContentMain>
                {filteredVerses.length === 0 ? (
                    <NoResult />
                ) : (
                    filteredVerses.map(({ verse, text }) => (
                        <Verse verse={verse} text={text} key={verse} />
                    ))
                )}
            </CardContentMain>
        </CardMain>
    )
}

export default Verses
