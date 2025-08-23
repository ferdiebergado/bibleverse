import NoResult from '@/components/NoResult'
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
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
        <Card className="m-4 p-6 shadow-md md:m-8 md:p-12">
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
            <CardContent className="flex flex-wrap gap-3 px-0">
                {filteredVerses.length === 0 ? (
                    <NoResult />
                ) : (
                    filteredVerses.map(({ verse, text }) => (
                        <Verse verse={verse} text={text} key={verse} />
                    ))
                )}
            </CardContent>
        </Card>
    )
}

export default Verses
