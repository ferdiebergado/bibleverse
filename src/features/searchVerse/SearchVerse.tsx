import ErrorMessage from '@/components/ErrorMessage'
import { SkeletonCard } from '@/components/SkeletonCard'
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Verse from '@/features/verse/Verse'
import { type FC, useState } from 'react'
import { useSearchVerseQuery } from '.'
import Search from './Search'

const SearchVerse: FC = () => {
    const initialSearchTerm = ''
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

    const {
        data: searchResult,
        isPending,
        isError,
        error,
    } = useSearchVerseQuery(searchTerm)

    const handleSearch = (term: string) => {
        setSearchTerm(term)
    }

    const handleClear = () => {
        setSearchTerm(initialSearchTerm)
    }

    return (
        <Card className="m-4 p-6 shadow-md md:m-8 md:p-12">
            <CardHeader>
                <CardTitle className="text-3xl">Verse Search</CardTitle>
                <CardAction>
                    <Search
                        placeHolder="e.g. John 3:16, matt 25:31-33,46"
                        onSearch={handleSearch}
                        onClear={handleClear}
                    />
                </CardAction>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-3 px-0">
                {isPending ? (
                    <SkeletonCard />
                ) : isError ? (
                    <ErrorMessage message={error.message} />
                ) : (
                    searchResult.map(({ verse, text }) => (
                        <Verse verse={verse} text={text} key={verse} />
                    ))
                )}
            </CardContent>
        </Card>
    )
}

export default SearchVerse
